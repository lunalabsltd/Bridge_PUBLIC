#!/usr/bin/env node

const { Command } = require( 'commander' );
const {
    init,
    test,
    build,
    tryGetConfig,
} = require( '../jobs/index.js' );

const program = new Command( 'eba.bridge' );
program.version( '1.0.0' );

program
    .command( 'init' )
    .action( async() => {
        await init();
    } );

program
    .command( 'build' )
    .description( 'Compile and setup up Bridge to Luna solution' )
    .option( '-bv, --bridgeVersion [bridgeVersion]', 'Update version for Bridge', null )
    .action( async( options ) => {
        const config = await tryGetConfig();
        await build( options, config );
    } );

program
    .command( 'test' )
    .description( 'Compile and run Bridge tests' )
    .option( '--ci', 'Use CI configuration', false )
    .option( '--debug', 'Log debug info to console', false )
    .option( '-s, --server', 'Run local web-server for test debug', false )
    .option( '-p, --port [port]', 'Port to run local web-server on', 8080 )
    .option( '-nc, --no-recompile', 'Run tests without Bridge recompile', false )
    .option( '-nd, --no-docker', 'Run tests outside Docker container (not recommended)', false )
    .action( async( options ) => {
        const { ci } = options;
        const config = await tryGetConfig( ci );
        await test( options, config );
    } );

program.parse( process.argv );
