const chalk = require( 'chalk' );
const fs = require( 'fs' );
const path = require( 'path' );
const inquirer = require( 'inquirer' );

const configDirPath = path.resolve( __dirname, '../../.config' );
const configPath = path.resolve( __dirname, '../../.config/config.json' );

async function ensureConfigDirExists() {
    try {
        await fs.promises.access( configDirPath, fs.constants.W_OK );
    } catch ( error ) {
        await fs.promises.mkdir( configDirPath );
    }
}

async function promptForPaths() {
    const questions = [
        {
            type: 'input',
            name: 'lunaPath',
            message: 'Provide full path to luna folder',
            default: './',
            validate: async( value ) => {
                try {
                    await fs.promises.access( path.join( value, 'LunaDevelopment.sln' ), fs.constants.R_OK );
                    return true;
                } catch ( error ) {
                    return 'LunaDevelopment.sln is not found in provided directory';
                }
            },
        },
        {
            type: 'input',
            name: 'bridgePath',
            message: 'Provide full path to Bridge folder',
            default: './',
            validate: async( value ) => {
                try {
                    await fs.promises.access( path.join( value, 'Bridge.sln' ), fs.constants.R_OK );
                    return true;
                } catch ( error ) {
                    return 'Bridge.sln is not found in provided directory';
                }
            },
        },
    ];

    const answers = await inquirer.prompt( questions );
    const { lunaPath, bridgePath } = answers;

    return { lunaPath, bridgePath };
}

async function updateConfig() {
    const paths = await promptForPaths();
    const pathsRaw = JSON.stringify( paths );
    await ensureConfigDirExists();

    await fs.promises.writeFile( configPath, pathsRaw, { encoding: 'utf8' } );
}

async function getConfig() {
    const configDataRaw = await fs.promises.readFile( configPath );

    return JSON.parse( configDataRaw );
}

function getConfigCI() {
    return {
        bridgePath: path.join( __dirname, '../../..' ),
        lunaPath: '',
    };
}

async function tryGetConfig( ci = false ) {
    if ( ci ) {
        return getConfigCI();
    }

    try {
        const { lunaPath, bridgePath } = await getConfig();
        fs.promises.access( path.join( lunaPath, 'LunaDevelopment.sln' ) );
        fs.promises.access( path.join( bridgePath, 'Bridge.sln' ) );

        return { lunaPath, bridgePath };
    } catch ( error ) {
        console.log( '', chalk.yellow.bold( 'Your config file is corrupted or does not exists' ) );
        console.log( '', chalk.yellow.bold( 'Let\'s create a new one' ) );
        await updateConfig();

        return getConfig();
    }
}

module.exports = {
    updateConfig,
    tryGetConfig,
    getConfig,
    getConfigCI,
};
