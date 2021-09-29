const arg = require( 'arg' );
const fs = require( 'fs' );
const { Paths, Regex } = require( './defines' );

let paths;

async function parseArgs( rawArgs ) {
    const args = arg({
        '--build': Boolean,
        '--test': Boolean,
        '--bridge-version': String,
        '-b': '--build',
        '-t': '--test',
        '-v': '--bridge-version',
    }, {
        argv: rawArgs.slice( 2 ),
    });

    const defaultBridgeVersion = await getCurrentBridgeVersion();

    return {
        build: args['--build'] || false,
        test: args['--test'] || false,
        bridgeVersion: args['--bridge-version'] || defaultBridgeVersion || null,
        targetDirectory: process.cwd(),
    };
}

async function getCurrentBridgeVersion() {
    const versionInfoFile = await fs.promises.readFile( paths.Bridge.nugetBuildPackageTargets, { encoding: 'utf8' });
    const currentBridgeVersion = versionInfoFile.match( Regex.defaultPackageVersion );

    return currentBridgeVersion && currentBridgeVersion[0];
}

async function parse( rawArgs, config ) {
    paths = new Paths( config );
    const options = await parseArgs( rawArgs );

    return options;
}

module.exports = { parse };
