const { build } = require( './build' );
const { test } = require( './test' );
const { updateConfig, validateConfig, getConfig } = require( './config' );

module.exports = {
    build,
    test,
    updateConfig,
    validateConfig,
    getConfig,
};
