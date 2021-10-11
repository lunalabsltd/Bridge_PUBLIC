#!/usr/bin/env node

const { Command } = require( 'commander' );
const {
    test,
    build,
    tryGetConfig,
} = require( './lib/jobs/index.js' );

const program = new Command();
program.version( '0.1.0' );

program
    .command( 'build' )
    .description( 'Compile and setup up Bridge to Luna solution' )
    .option( '-bv, --bridgeVersion [bridgeVersion]', 'Update version for Bridge', null ) // it should be argument
    .action( async( options ) => {
        const config = await tryGetConfig();

        await build( options, config );
    } );

program
    .command( 'test' )
    .description( 'Compile and run Bridge tests' )
    .option( '--ci', 'Use CI configuration', false )
    .option( '--debug', 'Log debug info to console', false )
    .action( async( options ) => {
        const { ci } = options;
        const config = await tryGetConfig( ci );

        await test( options, config );
    } );

program.parse( process.argv );
