const { build } = require( './build.js' );
const { test } = require( './test.js' );
const {
    updateConfig, tryGetConfig, getConfig, getConfigCI,
} = require( './config.js' );

module.exports = {
    build,
    test,
    updateConfig,
    tryGetConfig,
    getConfig,
    getConfigCI,
};
