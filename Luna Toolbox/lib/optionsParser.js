const arg = require('arg');
const inquirer = require('inquirer');

function parseArgs(rawArgs) {
	const args = arg({
		'--build': Boolean,
		'--test': Boolean,
		'-b': '--build',
		'-t': '--test',
	},{
		argv: rawArgs.slice(2)
	});

	// TODO: try parse bridge version

	return {
		build: args['--build'] || !args['--test'],
		test: args['--test'] || false,
		targetDirectory: process.cwd()
	};
}

async function promptForMissingOptions(options) {
	const questions = [];

	// TODO: ask for bridge version

	const answers = await inquirer.prompt(questions);

	return options;
}

async function parse(rawArgs) {
	const args = parseArgs(rawArgs);
	const options = await promptForMissingOptions(args);

	return options;
}

module.exports = { parse };
