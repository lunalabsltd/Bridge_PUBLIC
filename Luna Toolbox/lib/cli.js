const arg = require('arg');
const inquirer = require('inquirer');
const build = require('./build');
const test = require('./test');

function parseArgs(rawArgs) {
	const args = arg({
		'--build': Boolean,
		'--test': Boolean,
		'-b': '--build',
		'-t': '--test'
	},{
		argv: rawArgs.slice(2)
	});

	return {
		build: args['--build'] || !args['--test'],
		test: args['--test'] || false,
	};
}

async function promptForMissingOptions(options) {
	const questions = [];
	const answers = await inquirer.prompt(questions);

	return options;
}

async function cli(args) {
	let options = parseArgs(args);
	options = await promptForMissingOptions(options);
	console.log(options);

	if (options.build) {
		build();
	}

	if (options.test) {
		test();
	}
}

module.exports = { cli };
