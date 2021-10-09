const { build } = require( './build.js' );
const { test } = require( './test.js' );
const {
    updateConfig, validateConfig, getConfig, getConfigCI,
} = require( './config.js' );

module.exports = {
    build,
    test,
    updateConfig,
    validateConfig,
    getConfig,
    getConfigCI,
};
