const puppeteer = require( 'puppeteer' );
const path = require( 'path' );
const chalk = require( 'chalk' );
const Listr = require( 'listr' );
const execa = require( 'execa' );
const { Paths } = require( '../defines' );

let paths;

async function runTests() {
    return new Promise(( resolve ) => {
        ( async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            await page.exposeFunction( 'onTestResult', ( details ) => {
                const result = `${details.result ? 'PASSED' : 'FAILED'}   ${details.module} -> ${details.name}`;
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

                console.log( '\n\n\n' );

                await page.close();
                await browser.close();
                resolve();
            });

            await page.goto( `file:///${path.join( __dirname, '../../../Tests/Runner/', 'index.html' )}` );
        })();
    });
}

async function compileBridgeTests() {
    await execa( 'msbuild', [paths.Bridge.bridgeDevSln]);
}

async function restoreNugets() {
    await execa( 'nuget', ['restore', paths.Bridge.bridgeDevSln]);
}

async function test( options, config ) {
    paths = new Paths( config );

    return new Listr([
        {
            title: 'Restore Nuget packages for Bridge tests',
            task: async () => restoreNugets()
        },
        {
            title: 'Compile Bridge tests',
            task: async () => compileBridgeTests()
        },
        {
            title: 'Run tests',
            task: async () => runTests()
        }
    ]).run();
}

module.exports = {
    test
};
