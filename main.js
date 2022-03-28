const customConfig = require('./custom-webpack-config');
const path = require('path');
const currentPath = path.resolve(__dirname, '..');
const getStaticPath = require('./get-static-path');
let staticPath;

const maxAssetSize = 1024 * 1500;
const maxEntrypointSize = 1024 * 2500;

module.exports = {
    addons: [
        '@whitespace/storybook-addon-html/register',
        '@storybook/addon-a11y/register',
        'storybook-addon-paddings',
        '@storybook/addon-viewport/register'
    ],
    stories: ['../stories/**/*.stories.js'],
    webpackFinal: async function (config)  {
        staticPath = await getStaticPath(currentPath);
        config.plugins = [...customConfig.config.plugins, ...config.plugins];
        config.module.rules = [...config.module.rules.filter(rule => rule.test.toString() !== '/\\.css$/'), ...customConfig.config.module.rules];
        config.resolve.extensions.push('.css');
        config.resolve.alias['@StaticMage'] = staticPath;
        config.performance = {
            maxAssetSize: maxAssetSize,
            maxEntrypointSize: maxEntrypointSize
        }
        return config;
    },
};
