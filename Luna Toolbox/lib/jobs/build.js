const execa = require('execa');
const Listr = require('listr');
const path = require('path');
const fs = require('fs');
const replace = require('replace-in-file');
const { Paths, Regex } = require('../defines');

function build(options) {
	return new Listr([
		// {
		// 	title: 'Update Bridge version',
		// 	task: async () => await updateBridgeVersion(options)
		// },
		{
			title: 'Compile Bridge',
			task: async () => await compile(options)
		},
		{
			title: 'Update Luna dependencies',
			task: () => new Listr([
				{
					title: 'Clean up old dependencies',
					task: async () => await cleanUpOldDependencies()
				},
				{
					title: 'Copy nuget packages',
					task: async () => await copyNugets()
				},
				// {
				// 	title: 'Update Bridge version in configs',
				// 	task: async () => await updateVersionInConfigs(options)
				// },
				{
					title: 'Resolve Nuget dependencies',
					task: async () => await resolveNugets(options)
				}
			])
		}
	]);
}

async function updateBridgeVersion(options) {
	const assemblyInfoOptions = {
		files: Paths.Bridge.assemblyInfo,
		from : Regex.assemblyInformationalVersion,
		to: options.bridgeVersion
	};
	const configReplaceOptions = {
		files: Paths.Bridge.nugetBuildPackageTargets,
		from : Regex.defaultPackageVersion,
		to: options.bridgeVersion
	};

	await replace(assemblyInfoOptions);
	await replace(configReplaceOptions);
}

async function compile(options) {
	await execa('msbuild',
		[Paths.Bridge.bridgeSln, '-property:Configuration=Release'],
		{ cwd: options.targetDirectory });
}

async function getDirsToDelete(sourcePath) {
	const dirents = await fs.promises.readdir(sourcePath, { withFileTypes: true });
	const dirs = dirents.filter(dirent => dirent.isDirectory());

	return dirs.filter(dir => Paths.LunaCompiler.packagesToCleanUp.some(dep => dir.name.includes(dep)));
}

async function cleanUpOldDependencies() {
	debugger;
	const dirsToDelete = await getDirsToDelete(Paths.LunaCompiler.lunaCompilerPackages);
	const deletePromises = dirsToDelete.map(
		dir => fs.promises.rmdir(
			path.join(Paths.LunaCompiler.lunaCompilerPackages, dir.name),
				{ force: true, recursive: true }));

	await Promise.all(deletePromises);
}

async function copyNugets() {
	debugger;
	const copyPromises = [];
	for (let i = 0; i < Paths.Bridge.compiledNugetDirs.length; i++) {
		const dir = Paths.Bridge.compiledNugetDirs[i];
		const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
		const nugets = dirents.filter(dirent => path.extname(dirent.name) === '.nupkg');
		nugets.forEach(nuget => {
			const copyFilePromise = fs.promises.copyFile(
				path.join(dir, nuget.name),
				path.join(Paths.Bridge.nugetTempDir, nuget.name));
			copyPromises.push(copyFilePromise);
		});
	}

	await Promise.all(copyPromises);
}

async function updateVersionInConfigs(options) {
	const csprojReplaceOptions = {
		files: Paths.LunaCompiler.csprojs,
		from : Regex.csprojVersion,
		to: options.bridgeVersion
	};
	const configReplaceOptions = {
		files: Paths.LunaCompiler.nugetConfigs,
		from : Regex.configVersion,
		to: options.bridgeVersion
	};

	await replace(csprojReplaceOptions);
	await replace(configReplaceOptions);
}

async function resolveNugets(options) {
	await execa('nuget', ['restore', Paths.LunaCompiler.lunaCompilerSln], { cwd: options.targetDirectory });
}

module.exports = build;
