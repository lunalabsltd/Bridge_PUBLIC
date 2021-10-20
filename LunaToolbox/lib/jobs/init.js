const path = require( 'path' );
const execa = require( 'execa' );
const chalk = require( 'chalk' );
const { updateConfig } = require( './config.js' );

const MAC_OS = 'darwin';
const WINDOWS = 'windows';
const MAC_OS_XBUILD_VERSION_PATH = '/Library/Frameworks/Mono.framework/Versions/6.12.0/lib/mono/xbuild';
const LINUX_XBUILD_VERSION_PATH = '/usr/lib/mono/xbuild';

async function init() {
    await updateMonoXbuildFolder();
    await updateConfig();
}

async function updateMonoXbuildFolder() {
    if ( process.platform === WINDOWS ) {
        return;
    }

    console.log( '', chalk.yellow.bold( 'NOTE: program may ask you for sudo password' ) );
    console.log( '', chalk.yellow.bold( 'NOTE: we need to update your Mono installation' ) );
    console.log( '', chalk.yellow.bold( 'NOTE: Next changes will affect your current Mono installation, but we have to apply changes to let Bridge compile properly' ) );

    try {
        const baseXbuildPath = process.platform === MAC_OS ? MAC_OS_XBUILD_VERSION_PATH : LINUX_XBUILD_VERSION_PATH;

        await execa.command( `sudo ln -s ${path.join( baseXbuildPath, '14.0', 'bin' )} ${path.join( baseXbuildPath, '15.0' )} ` );
    } catch ( e ) {
        if ( e.exitCode === 1 ) {
            console.log( 'Looks like you have patched Mono already' );
        } else {
            console.log( e );
        }
    }
}

module.exports = {
    init,
};
