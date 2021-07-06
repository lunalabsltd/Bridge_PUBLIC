const arg = require('arg');
const inquirer = require('inquirer');

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
	questions.push({
		type: 'confirm',
		name: 'git',
		message: 'Initialize a git repository?',
		default: false,
	});
	const answers = await inquirer.prompt(questions);

	return options;
}

async function cli(args) {
	let options = parseArgs(args);
	options = await promptForMissingOptions(options);
	console.log(options);
}

module.exports = { cli };
