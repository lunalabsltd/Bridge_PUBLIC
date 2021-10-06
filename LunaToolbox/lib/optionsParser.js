const arg = require( 'arg' );

async function parseArgs( rawArgs ) {
    const args = arg({
        '--build': Boolean,
        '--test': Boolean,
        '--bridge-version': String,
        '--ci': Boolean,
        '--debug': Boolean,
        '-b': '--build',
        '-t': '--test',
        '-v': '--bridge-version',
    }, {
        argv: rawArgs.slice( 2 ),
    });

    return {
        build: args['--build'] || false,
        test: args['--test'] || false,
        ci: args['--ci'] || false,
        debug: args['--debug'] || false,
        bridgeVersion: args['--bridge-version'] || null,
        targetDirectory: process.cwd(),
    };
}

async function parse( rawArgs ) {
    const options = await parseArgs( rawArgs );

    return options;
}

module.exports = { parse };
