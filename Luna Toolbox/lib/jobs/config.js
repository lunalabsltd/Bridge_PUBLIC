const chalk = require( 'chalk' );
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

// const configPath = `${__dirname}/.config/config.json`;
const configPath = path.resolve(__dirname, '../../.config/config.json');

async function validateConfig() {
	try {
		const { lunaPath, bridgePath } = await getConfig();
		const isLunaPathValid = fs.promises.access(path.join(lunaPath, 'LunaDevelopment.sln'));
		const isBridgePathValid = fs.promises.access(path.join(bridgePath, 'Bridge.sln'));

		return isBridgePathValid && isLunaPathValid;
	}
	catch(error) {
		console.log('', chalk.yellow.bold('Your config file is corrupted or does not exists'));
		console.log('', chalk.yellow.bold('Let\'s create a new one'));
		await updateConfig();

		return true;
	}
}

async function updateConfig() {
	const paths = await promptForPaths();
	const pathsRaw = JSON.stringify(paths);

	await fs.promises.writeFile(configPath, pathsRaw, { encoding: 'utf8' });
}

async function promptForPaths() {
	const questions = [
		{
			type: 'input',
			name: 'lunaPath',
			message: `Provide full path to luna folder`,
			default: './',
			validate(value) {
				try {
					fs.accessSync(path.join(value, 'LunaDevelopment.sln'), fs.constants.R_OK);
					return true;
				}
				catch(error) {
					return 'No Luna solution found in provided directory';
				}
			}
		},
		{
			type: 'input',
			name: 'bridgePath',
			message: `Provide full path to Bridge folder`,
			default: './',
			validate(value) {
				try {
					fs.accessSync(path.join(value, 'Bridge.sln'), fs.constants.R_OK);
					return true;
				}
				catch(error) {
					return 'No Bridge solution found in provided directory';
				}
			}
		}
	];

	const answers = await inquirer.prompt(questions);
	const { lunaPath, bridgePath } = answers;

	return { lunaPath, bridgePath };
}

async function getConfig() {
	const configDataRaw = await fs.promises.readFile(configPath);
	const configData = JSON.parse(configDataRaw);

	return configData;
}

module.exports = {
	updateConfig,
	validateConfig,
	getConfig
};
