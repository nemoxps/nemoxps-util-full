module.exports = {
    root: true,
    extends: 'nemoxps',
    overrides: {
        files: ['src/browser/**/*.js', 'test/browser/**/*.js'],
        env: {
            browser: true,
        },
    },
};