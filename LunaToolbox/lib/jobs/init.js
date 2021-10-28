const path = require( 'path' );
const execa = require( 'execa' );
const chalk = require( 'chalk' );
const { updateConfig } = require( './config.js' );

const MAC_OS = 'darwin';
const WINDOWS = 'win32';
const MAC_OS_XBUILD_VERSION_PATH = '/Library/Frameworks/Mono.framework/Versions/6.12.0/lib/mono/xbuild';
const LINUX_XBUILD_VERSION_PATH = '/usr/lib/mono/xbuild';
const WINDOWS_DOCKER_INSTALL_LINK = 'https://docs.docker.com/desktop/mac/install/';
const MAC_OS_DOCKER_INSTALL_LINK = 'https://docs.docker.com/desktop/mac/install/';

async function init() {
    await updateMonoXbuildFolder();
    await updateConfig();
    await checkIsDockerInstalled();
}

// We've encountered the problem with Mono msbuild, that it tries to look up for .targets files
// in wrong path. So, we decided to copy proper .targets files to upper version of Mono.
// It should not broke your Mono installation for other projects
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
            console.log( '', chalk.green.bold( 'You have patched Mono already' ) );
        } else {
            console.log( e );
        }
    }
}

async function checkIsDockerInstalled() {
    try {
        await execa( 'docker', [ '--version' ] );
        console.log( '', chalk.green.bold( 'You have Docker installed already' ) );
    } catch ( e ) {
        const link = process.platform === MAC_OS ? MAC_OS_DOCKER_INSTALL_LINK : WINDOWS_DOCKER_INSTALL_LINK;
        console.log( '', chalk.yellow.bold( 'Looks like you have no docker installed' ) );
        console.log( `Please, follow: ${link} to install Docker desktop` );
    }
}

module.exports = {
    init,
};
