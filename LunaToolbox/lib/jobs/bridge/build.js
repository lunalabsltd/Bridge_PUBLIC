const execa = require( 'execa' );
const Listr = require( 'listr' );
const path = require( 'path' );
const fs = require( 'fs' );
const replace = require( 'replace-in-file' );
const inquirer = require( 'inquirer' );
const { Paths } = require( '../../defines.js' );
const { regex } = require( '../../defines/bridge/regex.js' );
const { messages } = require( '../../defines/bridge/messages.js' );

async function updateBridgeVersion( options, paths ) {
    const assemblyInfoOptions = {
        files: paths.Bridge.assemblyInfo,
        from: regex.assemblyInformationalVersion,
        to: options.bridgeVersion,
    };
    const configReplaceOptions = {
        files: paths.Bridge.nugetBuildPackageTargets,
        from: regex.defaultPackageVersion,
        to: options.bridgeVersion,
    };

    await replace( assemblyInfoOptions );
    await replace( configReplaceOptions );
}

async function getCurrentBridgeVersion( paths ) {
    const versionInfoFile = await fs.promises.readFile( paths.Bridge.nugetBuildPackageTargets, { encoding: 'utf8' } );
    const currentBridgeVersion = versionInfoFile.match( regex.defaultPackageVersion );

    return currentBridgeVersion && currentBridgeVersion[ 0 ];
}

async function compile( paths ) {
    await execa( 'msbuild', [ paths.Bridge.bridgeSln, '-property:Configuration=Release' ] );
}

async function getDirsToDelete( sourcePath, paths ) {
    const dirents = await fs.promises.readdir( sourcePath, { withFileTypes: true } );
    const dirs = dirents.filter( ( dirent ) => dirent.isDirectory() );

    return dirs
        .filter( ( dir ) => paths.LunaCompiler.packagesToCleanUp
            .some( ( dep ) => dir.name.includes( dep ) ) );
}

async function cleanUpOldNuggets( paths ) {
    const dirents = await fs.promises.readdir( paths.Bridge.nugetTempDir, { withFileTypes: true } );
    const nugets = dirents.filter( ( dirent ) => path.extname( dirent.name ) === '.nupkg' );
    const removePromises = [];
    nugets.forEach( ( nuget ) => {
        const removePromise = fs.promises.unlink( path.join( paths.Bridge.nugetTempDir, nuget.name ) );
        removePromises.push( removePromise );
    } );
}

async function cleanUpOldDependencies( paths ) {
    await cleanUpOldNuggets( paths );
    const dirsToDelete = await getDirsToDelete( paths.LunaCompiler.lunaCompilerPackages, paths );
    const deletePromises = dirsToDelete.map(
        ( dir ) => fs.promises.rm(
            path.join( paths.LunaCompiler.lunaCompilerPackages, dir.name ),
            { force: true, recursive: true }
        )
    );

    await Promise.all( deletePromises );
}

async function copyNugets( paths ) {
    await updateNugetSource( paths );

    const copyPromises = [];
    for ( let i = 0; i < paths.Bridge.compiledNugetDirs.length; i++ ) {
        const dir = paths.Bridge.compiledNugetDirs[ i ];
        const dirents = await fs.promises.readdir( dir, { withFileTypes: true } );
        const nugets = dirents.filter( ( dirent ) => path.extname( dirent.name ) === '.nupkg' );
        nugets.forEach( ( nuget ) => {
            const copyFilePromise = fs.promises.copyFile(
                path.join( dir, nuget.name ),
                path.join( paths.Bridge.nugetTempDir, nuget.name )
            );
            copyPromises.push( copyFilePromise );
        } );
    }

    await Promise.all( copyPromises );
}

async function updateNugetSource( paths ) {
    try {
        await fs.promises.access( paths.LunaCompiler.nugetConfig, fs.constants.R_OK | fs.constants.W_OK );
    } catch ( error ) {
        await fs.promises.copyFile(
            path.resolve( __dirname, '../../templates/nuget.config' ),
            paths.LunaCompiler.nugetConfig
        );
    }

    const nugetSourceReplaceOptions = {
        files: paths.LunaCompiler.nugetConfig,
        from: regex.nugetConfigPackagesPath,
        to: paths.Bridge.nugetTempDir,
    };

    await replace( nugetSourceReplaceOptions );
}

async function updateVersionInConfigs( options, paths ) {
    const csprojReplaceOptions = {
        files: paths.LunaCompiler.csprojs,
        from: regex.csprojVersion,
        to: options.bridgeVersion,
        allowEmptyPaths: true,
    };
    const configReplaceOptions = {
        files: paths.LunaCompiler.packagesConfigs,
        from: regex.nugetConfigVersion,
        to: options.bridgeVersion,
    };

    await Promise.all( [ replace( csprojReplaceOptions ), replace( configReplaceOptions ) ] );
}

async function updateVersionInVendorConfigs( options, paths ) {
    const csprojReplaceOptions = {
        files: paths.Vendor.csprojs,
        from: regex.csprojVersion,
        to: options.bridgeVersion,
    };
    const configReplaceOptions = {
        files: paths.Vendor.packagesConfigs,
        from: regex.nugetConfigVersion,
        to: options.bridgeVersion,
    };

    await Promise.all( [ replace( csprojReplaceOptions ), replace( configReplaceOptions ) ] );
}

async function resolveNugetsLunaCompiler( paths ) {
    await execa( 'nuget', [ 'restore', paths.LunaCompiler.lunaCompilerSln ] );
}

async function resolveNugetsVendorLibs( paths ) {
    await execa( 'nuget', [ 'restore', paths.Vendor.vendorSln ] );
}

async function askForMissingOptions( options, paths ) {
    const defaultBridgeVersion = await getCurrentBridgeVersion( paths );
    const questions = [];
    if ( !options.bridgeVersion ) {
        questions.push( {
            type: 'input',
            name: 'bridgeVersion',
            message: messages.bridgeVersion.replace( '$currentBridgeVersion', defaultBridgeVersion ),
            default: defaultBridgeVersion,
            validate( value ) {
                const pass = value.match( /\d+\.\d+\.\d+[a-zA-Z0-9.-]+/ );

                return pass ? true : messages.bridgeVersionValidationError;
            },
        } );
    }

    const answers = await inquirer.prompt( questions );
    const bridgeVersionRaw = options.bridgeVersion || answers.bridgeVersion;
    const bridgeVersion = bridgeVersionRaw.includes( '-luna' ) ? bridgeVersionRaw : `${bridgeVersionRaw}-luna`;

    return {
        ...options,
        bridgeVersion,
    };
}

async function copyBridgeTypemap( paths ) {
    const dirname = path.dirname( paths.LunaCompiler.typemap );
    const exist = fs.existsSync( dirname );
    if ( !exist ) {
        await fs.promises.mkdir( dirname, { recursive: true } );
    }
    await fs.promises.copyFile( paths.Bridge.typemap, paths.LunaCompiler.typemap );
}

async function build( options, config ) {
    const paths = new Paths( config );
    const completeOptions = await askForMissingOptions( options, paths );

    return new Listr( [
        {
            title: 'Clean up old dependencies',
            task: async() => cleanUpOldDependencies( paths ),
        },
        {
            title: 'Update Bridge version in Bridge solution',
            task: async() => updateBridgeVersion( completeOptions, paths ),
        },
        {
            title: 'Compile Bridge',
            task: async() => compile( paths ),
        },
        {
            title: 'Copy nuget packages',
            task: async() => copyNugets( paths ),
        },
        {
            title: 'Update Bridge version in Luna Compiler',
            task: async() => updateVersionInConfigs( completeOptions, paths ),
        },
        {
            title: 'Update Bridge version in Vendor libs',
            task: async() => updateVersionInVendorConfigs( completeOptions, paths ),
        },
        {
            title: 'Resolve Nuget dependencies for Luna Compiler',
            task: async() => resolveNugetsLunaCompiler( paths ),
        },
        {
            title: 'Resolve Nuget dependencies for Vendor libs',
            task: async() => resolveNugetsVendorLibs( paths ),
        },
        {
            title: 'Copy Bridge Typemap',
            task: async() => copyBridgeTypemap( paths ),
        },
    ] ).run();
}

module.exports = { build };
