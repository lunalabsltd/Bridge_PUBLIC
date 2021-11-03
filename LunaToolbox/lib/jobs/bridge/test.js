const puppeteer = require( 'puppeteer' );
const chalk = require( 'chalk' );
const execa = require( 'execa' );
const { spawn } = require( 'child_process' );
const express = require( 'express' );
const { Paths } = require( '../../defines.js' );

const SUCCESS_EXIT_CODE = 0;
const BRIDGE_LTB_TAG = 'bridge-ltb';

async function runTests( options, paths ) {
    let testCounter = 0;
    console.log( '', chalk.green.bold( 'Run Bridge tests...' ) );

    const server = runServer( options, paths );

    const browser = await puppeteer.launch( { args: [ '--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security' ] } );
    const [ page ] = await browser.pages();

    await page.exposeFunction( 'onTestResult', ( details ) => {
        if ( options.debug ) {
            testCounter++;
            const result = `${testCounter}: ${details.result ? 'PASSED' : 'FAILED'}   ${details.module} -> ${details.name}`;
            console.log( result );
        }
    } );

    await page.exposeFunction( 'onTestsDone', async( details ) => {
        console.log( '', chalk.green.bold( `Total: ${details.total}` ) );
        console.log( '', chalk.green.bold( `Passed: ${details.passed}` ) );
        console.log( '', chalk.red.bold( `Failed: ${details.failed}` ) );

        details.tests.forEach( ( testLog ) => {
            console.log( '', chalk.red.bold( `${testLog.module} -> ${testLog.name}` ) );
            console.log( testLog.message );
        } );

        if ( details.failed > 0 ) {
            throw new Error( 'Some tests failed.' );
        }
    } );

    await page.goto( `http://127.0.0.1:${options.port}` );
    await page.waitForSelector( '#result-container > span', { timeout: 1000 * 60 * 15 } );

    await page.close();
    await browser.close();
    server.close();
}

async function compileBridgeTests( paths ) {
    console.log( '', chalk.green.bold( 'Compile Bridge tests...' ) );
    await execa( 'msbuild', [ paths.Bridge.bridgeDevSln ] );
}

async function restoreNugets( paths ) {
    console.log( '', chalk.green.bold( 'Restore Nuget packages...' ) );
    await execa( 'nuget', [ 'restore', paths.Bridge.bridgeDevSln ] );
}

function runServer( options, paths ) {
    const app = express();
    app.use( express.static( paths.Bridge.bridgeTests ) );

    return app.listen( options.port );
}

function runDevServer( options, paths ) {
    console.log( '', chalk.green.bold( `Starting local server on: http://localhost:${options.port}` ) );
    runServer( options, paths );
    console.log( 'Ctrl+C to stop server' );
}

async function runDockerContainer( options, paths ) {
    await dockerBuild( paths );
    const ltbDockerCommand = buildLtbDockerCommand( options );
    await dockerRun( options, ltbDockerCommand );
}

async function dockerBuild( paths ) {
    return new Promise( ( resolve, reject ) => {
        const process = spawn( 'docker', [ 'build', '-t', BRIDGE_LTB_TAG, paths.bridgePath ], { stdio: 'inherit' } );

        process.on( 'error', ( error ) => {
            reject( error );
        } );

        process.on( 'close', ( code ) => {
            if ( code === SUCCESS_EXIT_CODE ) {
                console.log( '', chalk.green.bold( 'Container build done' ) );
                resolve();
            } else {
                console.log( '', chalk.red.bold( 'Container build failed' ) );
                reject( new Error( `Container build failed. Exit code: ${code}` ) );
            }
        } );
    } );
}

async function dockerRun( { port }, command ) {
    await new Promise( ( resolve, reject ) => {
        const process = spawn( 'docker', [ 'run', '-p', `${port}:${port}`, BRIDGE_LTB_TAG, ...command ], { stdio: 'inherit' } );

        process.on( 'error', ( error ) => {
            reject( error );
        } );

        process.on( 'close', ( code ) => {
            if ( code === SUCCESS_EXIT_CODE ) {
                console.log( '', chalk.green.bold( 'Test run done' ) );
                resolve();
            } else {
                console.log( '', chalk.red.bold( 'Test run failed' ) );
                reject( new Error( `Test run failed. Exit code: ${code}` ) );
            }
        } );
    } );
}

async function cleanUpDocker() {
    await dockerRemoveContainers();
    await dockerRemoveImageByTag();
}

async function dockerRemoveContainers() {
    await new Promise( ( resolve, reject ) => {
        let dockerOutput = '';
        const process = spawn( 'docker', [ 'ps', '-a', '--filter', `ancestor=${BRIDGE_LTB_TAG}` ] );

        process.stdout.on( 'data', ( data ) => {
            const dataString = Buffer.from( data ).toString();
            dockerOutput += dataString;
        } );

        process.on( 'error', ( error ) => {
            reject( error );
        } );

        process.on( 'close', async( code ) => {
            if ( code === SUCCESS_EXIT_CODE ) {
                const outputRows = dockerOutput.split( '\n' );
                outputRows.splice( 0, 1 ); // Remove first row with docker table head
                const containerIds = outputRows.map( ( containerInfo ) => containerInfo.split( ' ' )[ 0 ] ).filter( ( id ) => !!id );
                const promises = containerIds.map( ( id ) => dockerRemoveContainerById( id ) );
                await Promise.all( promises );
                resolve();
            } else {
                reject( new Error( `Docker containers clean up failed. Exit code: ${code}` ) );
            }
        } );
    } );
}

async function dockerRemoveContainerById( id ) {
    return new Promise( ( resolve, reject ) => {
        const process = spawn( 'docker', [ 'rm', '-f', id ] );

        process.on( 'error', ( error ) => {
            reject( error );
        } );

        process.on( 'close', ( code ) => {
            if ( code === SUCCESS_EXIT_CODE ) {
                console.log( '', chalk.green.bold( `Container ${id}: container has been removed` ) );
                resolve();
            } else {
                console.log( '', chalk.red.bold( `Container ${id}: container remove failed` ) );
                reject( new Error( `Container ${id}: container remove failed. Exit code: ${code}` ) );
            }
        } );
    } );
}

async function dockerRemoveImageByTag() {
    return new Promise( ( resolve, reject ) => {
        const process = spawn( 'docker', [ 'rmi', '-f', BRIDGE_LTB_TAG ] );

        process.on( 'error', ( error ) => {
            reject( error );
        } );

        process.on( 'close', ( code ) => {
            if ( code === SUCCESS_EXIT_CODE ) {
                console.log( '', chalk.green.bold( 'Image has been removed' ) );
                resolve();
            } else {
                console.log( '', chalk.red.bold( 'Image remove failed' ) );
                reject( new Error( `Image remove failed. Exit code: ${code}` ) );
            }
        } );
    } );
}

function buildLtbDockerCommand( options ) {
    const command = [ 'ltb', 'test' ];

    if ( !command.recompile ) {
        command.push( '-nc' );
    }

    if ( options.server ) {
        command.push( '-s' );
    }

    if ( options.debug ) {
        command.push( '--debug' );
    }

    command.push( '--ci' );
    command.push( '-p' );
    command.push( '-nd' );
    command.push( options.port );

    return command;
}

async function test( options, config ) {
    try {
        const paths = new Paths( config );

        if ( options.docker ) {
            try {
                await runDockerContainer( options, paths );
                return;
            } catch ( error ) {
                console.log( error );
            } finally {
                await cleanUpDocker( paths );
            }
        }

        if ( options.recompile ) {
            await restoreNugets( paths );
            await compileBridgeTests( paths );
        }

        if ( options.server ) {
            runDevServer( options, paths );
            return;
        }

        await runTests( options, paths );
    } catch ( e ) {
        console.log( '', chalk.red.bold( e.message ) );
        console.log( e.stack );
    }
}

module.exports = {
    test,
};
