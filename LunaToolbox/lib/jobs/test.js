const puppeteer = require( 'puppeteer' );
const chalk = require( 'chalk' );
const execa = require( 'execa' );
const express = require( 'express' );
const { Paths } = require( '../defines' );

let paths;

async function runTests() {
    let testCounter = 0;
    console.log( '', chalk.green.bold( 'Run Bridge tests...' ));

    const app = express();
    app.use( express.static( paths.Bridge.bridgeTests ));
    const server = app.listen( 8080 );

    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security'] });
    const page = await browser.newPage();

    await page.exposeFunction( 'onTestResult', ( details ) => {
        testCounter++;
        const result = `${testCounter}: ${details.result ? 'PASSED' : 'FAILED'}   ${details.module} -> ${details.name}`;
        console.log( result );
    });

    await page.exposeFunction( 'onTestsDone', async ( details ) => {
        console.log( '', chalk.green.bold( `Total: ${details.total}` ));
        console.log( '', chalk.green.bold( `Passed: ${details.passed}` ));
        console.log( '', chalk.red.bold( `Failed: ${details.failed}` ));

        details.tests.forEach(( testLog ) => {
            console.log( '', chalk.red.bold( `${testLog.module} -> ${testLog.name}` ));
            console.log( testLog.message );
        });

        await page.close();
        await browser.close();
        server.close();

        if ( details.failed > 0 ) {
            throw new Error( 'Some tests failed.' );
        }
    });

    await page.goto( 'http://127.0.0.1:8080' );
}

async function compileBridgeTests() {
    console.log( '', chalk.green.bold( 'Compile Bridge tests...' ));
    await execa( 'msbuild', [paths.Bridge.bridgeDevSln]);
}

async function restoreNugets() {
    console.log( '', chalk.green.bold( 'Restore Nuget packages...' ));
    await execa( 'nuget', ['restore', paths.Bridge.bridgeDevSln]);
}

async function test( options, config ) {
    paths = new Paths( config );

    await restoreNugets();
    await compileBridgeTests();
    await runTests();
}

module.exports = {
    test
};
