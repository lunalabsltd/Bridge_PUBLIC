const { build } = require( './bridge/build.js' );
const { test } = require( './bridge/test.js' );
const { init } = require( './init.js' );
const {
    updateConfig, tryGetConfig, getConfig, getConfigCI,
} = require( './config.js' );

module.exports = {
    build,
    test,
    init,
    updateConfig,
    tryGetConfig,
    getConfig,
    getConfigCI,
};
