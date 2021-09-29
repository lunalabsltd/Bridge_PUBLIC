const { build } = require( './build' );
const { test } = require( './test' );
const {
    updateConfig, validateConfig, getConfig, getConfigCI
} = require( './config' );

module.exports = {
    build,
    test,
    updateConfig,
    validateConfig,
    getConfig,
    getConfigCI,
};
