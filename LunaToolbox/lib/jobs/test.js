const puppeteer = require( 'puppeteer' );
// const path = require( 'path' );
const chalk = require( 'chalk' );
const execa = require( 'execa' );
const { Paths } = require( '../defines' );

let paths;

async function runTests() {
    let testCounter = 0;
    console.log( '', chalk.green.bold( 'Run Bridge tests...' ));
    // const server = execa( 'ws', ['-p', '9000'], { cwd: path.join( __dirname, '../../../Tests/Runner' ) });
    const server = execa( 'ws', ['-p', '9005'], { cwd: '/bridge/Tests/Runner' });
    // server.stdout.pipe( process.stdout );

    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security'
        ],
        // devtools: true,
        // headless: false
    });
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

        if ( details.failed > 0 ) {
            details.tests.forEach(( testLog ) => {
                console.log( '', chalk.red.bold( `${testLog.module} -> ${testLog.name}` ));
                console.log( testLog.message );
            });

            throw new Error( 'Some tests failed.' );
        }

        await page.close();
        await browser.close();
        server.cancel();
    });

    // await page.goto( `file:///${path.join( __dirname, '../../../Tests/Runner/', 'index.html' )}?moduleId=9f1b120d` );
    await page.goto( 'http://127.0.0.1:9005' );
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
