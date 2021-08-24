const execa = require('execa');
const Listr = require('listr');
const path = require('path');
const fs = require('fs');
const replace = require('replace-in-file');
const { Paths, Regex } = require('../defines');

let paths;

function build(options, config) {
	paths = new Paths(config);

	return new Listr([
		{
			title: 'Clean up old dependencies',
			task: async () => await cleanUpOldDependencies()
		},
		{
			title: 'Update Bridge version in Bridge solution',
			task: async () => await updateBridgeVersion(options)
		},
		{
			title: 'Compile Bridge',
			task: async () => await compile(options)
		},
		{
			title: 'Copy nuget packages',
			task: async () => await copyNugets()
		},
		{
			title: 'Update Bridge version in Luna Compiler',
			task: async () => await updateVersionInConfigs(options)
		},
		{
			title: 'Update Bridge version in Vendor libs',
			task: async () => await updateVersionInVendorConfigs(options)
		},
		{
			title: 'Resolve Nuget dependencies for Luna Compiler',
			task: async () => await resolveNugetsLunaCompiler(options)
		},
		{
			title: 'Resolve Nuget dependencies for Vendor libs',
			task: async () => await resolveNugetsVendorLibs(options)
		},
	]).run();
}

async function updateBridgeVersion(options) {
	const assemblyInfoOptions = {
		files: paths.Bridge.assemblyInfo,
		from : Regex.assemblyInformationalVersion,
		to: options.bridgeVersion
	};
	const configReplaceOptions = {
		files: paths.Bridge.nugetBuildPackageTargets,
		from : Regex.defaultPackageVersion,
		to: options.bridgeVersion
	};

	await replace(assemblyInfoOptions);
	await replace(configReplaceOptions);
}

async function compile(options) {
	await execa('msbuild', [paths.Bridge.bridgeSln, '-property:Configuration=Release']);
}

async function getDirsToDelete(sourcePath) {
	const dirents = await fs.promises.readdir(sourcePath, { withFileTypes: true });
	const dirs = dirents.filter(dirent => dirent.isDirectory());

	return dirs.filter(dir => paths.LunaCompiler.packagesToCleanUp.some(dep => dir.name.includes(dep)));
}

async function cleanUpOldDependencies() {
	await cleanUpOldNuggets();
	const dirsToDelete = await getDirsToDelete(paths.LunaCompiler.lunaCompilerPackages);
	const deletePromises = dirsToDelete.map(
		dir => fs.promises.rmdir(
			path.join(paths.LunaCompiler.lunaCompilerPackages, dir.name),
				{ force: true, recursive: true }));

	await Promise.all(deletePromises);
}

async function cleanUpOldNuggets() {
	const dirents = await fs.promises.readdir(paths.Bridge.nugetTempDir, { withFileTypes: true });
	const nugets = dirents.filter(dirent => path.extname(dirent.name) === '.nupkg');
	const removePromises = [];
	nugets.forEach(nuget => {
		const removePromise = fs.promises.unlink(path.join(paths.Bridge.nugetTempDir, nuget.name));
		removePromises.push(removePromise);
	});
}

async function copyNugets() {
	await updateNugetSource();

	const copyPromises = [];
	for (let i = 0; i < paths.Bridge.compiledNugetDirs.length; i++) {
		const dir = paths.Bridge.compiledNugetDirs[i];
		const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
		const nugets = dirents.filter(dirent => path.extname(dirent.name) === '.nupkg');
		nugets.forEach(nuget => {
			const copyFilePromise = fs.promises.copyFile(
				path.join(dir, nuget.name),
				path.join(paths.Bridge.nugetTempDir, nuget.name));
			copyPromises.push(copyFilePromise);
		});
	}

	await Promise.all(copyPromises);
}

async function updateNugetSource() {
	try {
		await fs.promises.access(paths.LunaCompiler.nugetConfig, fs.constants.R_OK | fs.constants.W_OK);
	}
	catch(error) {
		await fs.promises.copyFile(path.resolve(__dirname, '../templates/nuget.config'), paths.LunaCompiler.nugetConfig);
	}

	const nugetSourceReplaceOptions = {
		files: paths.LunaCompiler.nugetConfig,
		from: Regex.nugetConfigPackagesPath,
		to: paths.Bridge.nugetTempDir
	};

	await replace(nugetSourceReplaceOptions);
}

async function updateVersionInConfigs(options) {
	const csprojReplaceOptions = {
		files: paths.LunaCompiler.csprojs,
		from : Regex.csprojVersion,
		to: options.bridgeVersion,
		allowEmptyPaths: true
	};
	const configReplaceOptions = {
		files: paths.LunaCompiler.packagesConfigs,
		from : Regex.nugetConfigVersion,
		to: options.bridgeVersion
	};

	await Promise.all([replace(csprojReplaceOptions), replace(configReplaceOptions)]);
}

async function updateVersionInVendorConfigs(options) {
	const csprojReplaceOptions = {
		files: paths.Vendor.csprojs,
		from : Regex.csprojVersion,
		to: options.bridgeVersion
	};
	const configReplaceOptions = {
		files: paths.Vendor.packagesConfigs,
		from : Regex.nugetConfigVersion,
		to: options.bridgeVersion
	};

	await Promise.all([replace(csprojReplaceOptions), replace(configReplaceOptions)]);
}

async function resolveNugetsLunaCompiler() {
	await execa('nuget', ['restore', paths.LunaCompiler.lunaCompilerSln]);
}

async function resolveNugetsVendorLibs() {
	await execa('nuget', ['restore', paths.Vendor.vendorSln]);
}

module.exports = { build };
