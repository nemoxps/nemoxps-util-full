module.exports = {
    root: true,
    extends: 'nemoxps',
    overrides: [
        {
            files: ['src/browser/**/*.js', 'test/browser/**/*.js'],
            env: {
                browser: true,
            },
        },
        {
            files: ['src/index.js', 'src/node/index.js', 'src/browser/index.js'],
            rules: {
                'global-require': 0,
            },
        },
    ],
};