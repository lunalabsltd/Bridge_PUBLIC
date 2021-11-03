#!/usr/bin/env node

const { Command } = require( 'commander' );

const program = new Command( 'eba.deobfuscator' );
program.version( '1.0.0' );

program.parse( process.argv );
