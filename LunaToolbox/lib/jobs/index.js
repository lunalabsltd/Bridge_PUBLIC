const { build } = require( './bridge/build.js' );
const { test } = require( './bridge/test.js' );
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
