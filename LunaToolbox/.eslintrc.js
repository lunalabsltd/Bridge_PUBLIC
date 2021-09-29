module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        indent: ['error', 4],
        'eol-last': ['error', 'always'],
        'no-console': 'off',
        'no-use-before-define': 'off',
        'max-len': ['warn', { code: 160 }],
        'no-bitwise': 'off',
        'no-plusplus': 'off',
        'no-loop-func': 'off',
        'comma-dangle': 'off',
        'no-await-in-loop': 'off',
        'space-in-parens': ['error', 'always', { exceptions: ['{}', '[]', '()'] }]
    },
};
