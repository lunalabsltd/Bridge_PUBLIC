const puppeteer = require( 'puppeteer' );
const chalk = require( 'chalk' );
const execa = require( 'execa' );
const express = require( 'express' );
const { Paths } = require( '../defines.js' );

let paths;

async function runTests( options ) {
    return new Promise( ( resolve, reject ) => {
        ( async() => {
            let testCounter = 0;
            console.log( '', chalk.green.bold( 'Run Bridge tests...' ) );

            const app = express();
            app.use( express.static( paths.Bridge.bridgeTests ) );
            const server = app.listen( options.port );

            const browser = await puppeteer.launch( { args: [ '--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security' ] } );
            const page = await browser.newPage();

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

                await page.close();
                await browser.close();
                server.close();

                if ( details.failed > 0 ) {
                    reject( new Error( 'Some tests failed.' ) );
                    return;
                }

                resolve();
            } );

            await page.goto( 'http://127.0.0.1:8080' );

            setTimeout( async() => {
                await page.close();
                await browser.close();
                server.close();

                reject( new Error( 'Test timeout (15m) exceed' ) );
            }, 1000 * 60 * 15 );
        } )();
    } );
}

async function compileBridgeTests() {
    console.log( '', chalk.green.bold( 'Compile Bridge tests...' ) );
    await execa( 'msbuild', [ paths.Bridge.bridgeDevSln ] );
}

async function restoreNugets() {
    console.log( '', chalk.green.bold( 'Restore Nuget packages...' ) );
    await execa( 'nuget', [ 'restore', paths.Bridge.bridgeDevSln ] );
}

function runLocalServer( options ) {
    console.log( '', chalk.green.bold( `Starting local server on: http://localhost:${options.port}` ) );

    const app = express();
    app.use( express.static( paths.Bridge.bridgeTests ) );
    app.listen( options.port );

    console.log( 'Ctrl+C to stop server' );
}

async function test( options, config ) {
    paths = new Paths( config );

    if ( options.server ) {
        runLocalServer( options );
        return;
    }

    if ( options.recompile ) {
        await restoreNugets();
        await compileBridgeTests();
    }

    await runTests( options );
}

module.exports = {
    test,
};
