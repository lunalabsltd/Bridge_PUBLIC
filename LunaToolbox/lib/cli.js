const chalk = require( 'chalk' );
const {
    build, validateConfig, getConfig, getConfigCI, test
} = require( './jobs' );
const optionsParser = require( './optionsParser' );

function getTask( options ) {
    if ( options.test ) {
        return test;
    }

    return build;
}
async function cli( args ) {
    try {
        const options = await optionsParser.parse( args, config );
        let config;

        if ( options.ci ) {
            config = await getConfigCI();
        } else {
            await validateConfig();
            config = await getConfig();
        }

        const task = getTask( options );
        await task( options, config );

        console.log( '', chalk.green.bold( 'DONE' ));
    } catch ( e ) {
        console.log( '', chalk.red.bold( 'ERROR:' ));
        console.log( e.message );
        process.exit( 1 );
    }
}

module.exports = { cli };
