const chalk = require('chalk');
const path = require('path');
const build = require('./jobs/build');
const optionsParser = require('./optionsParser');

function getTasks(options) {
	if (options.build) {
		return build(options);
	}
}

function isOutsideLunaFolder() {
	if (path.basename(process.cwd()) !== 'luna') {
		throw new Error('Outside luna directory');
	}
}

async function cli(args) {
	try {
		isOutsideLunaFolder();
		let options = await optionsParser.parse(args);
		const tasks = getTasks(options);

		await tasks.run();

		console.log('', chalk.green.bold('DONE'));
	}
	catch (e) {
		console.log('', chalk.red.bold('ERROR:'));
		console.log(e.message);
		process.exit(1);
	}
}

module.exports = { cli };
