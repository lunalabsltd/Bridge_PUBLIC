const chalk = require('chalk');
const { build, validateConfig, getConfig } = require('./jobs');
const optionsParser = require('./optionsParser');

function getTask(options) {
	if (options.build) {
		return build;
	}
}
async function cli(args) {
	try {
		await validateConfig();
		const config = await getConfig();
		let options = await optionsParser.parse(args, config);
		const task = getTask(options);

		await task(options, config);

		console.log('', chalk.green.bold('DONE'));
	}
	catch (e) {
		console.log('', chalk.red.bold('ERROR:'));
		console.log(e.message);
		process.exit(1);
	}
}

module.exports = { cli };
