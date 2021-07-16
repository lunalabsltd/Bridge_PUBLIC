const arg = require('arg');
const inquirer = require('inquirer');
const fs = require('fs');
const { Paths, Regex } = require('./defines');

let paths;

function parseArgs(rawArgs) {
	const args = arg({
		'--build': Boolean,
		'--test': Boolean,
		'--bridge-version': String,
		'-b': '--build',
		'-t': '--test',
		'-bv': '--bridge-version'
	},{
		argv: rawArgs.slice(2)
	});

	return {
		build: args['--build'] || !args['--test'],
		test: args['--test'] || false,
		bridgeVersion: args['--bridge-version'] || null,
		targetDirectory: process.cwd()
	};
}

async function getCurrentBridgeVersion() {
	const versionInfoFile = await fs.promises.readFile(paths.Bridge.nugetBuildPackageTargets, { encoding: 'utf8' });
	const currentBridgeVersion = versionInfoFile.match(Regex.defaultPackageVersion);

	return currentBridgeVersion && currentBridgeVersion[0];
}

async function promptForMissingOptions(options) {
	const currentBridgeVersion = await getCurrentBridgeVersion();
	const questions = [];

	if (!options.bridgeVersion) {
		questions.push({
			type: 'input',
			name: 'bridgeVersion',
			message: `Enter new version for Bridge (or press enter to stay on current ${currentBridgeVersion})`,
			default: currentBridgeVersion,
			validate(value) {
				const pass = value.match(/\d+\.\d+\.\d+[a-zA-Z0-9\.-]+/);

				return pass ? true : 'Please, enter valid version number (ex. "17.9.11", "17.9.11-luna")';
			}
		});
	}

	const answers = await inquirer.prompt(questions);

	return {
		...options,
		bridgeVersion: options.bridgeVersion || answers.bridgeVersion
	};
}

async function parse(rawArgs, config) {
	paths = new Paths(config);
	const args = parseArgs(rawArgs);
	const options = await promptForMissingOptions(args);

	return options;
}

module.exports = { parse };
