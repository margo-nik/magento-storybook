const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoader = {
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: require.resolve('css-loader'),
            options: {
                importLoaders: 1
            }
        }
    ]
};

const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
    })
];

module.exports = {
    config: {
        module: {
            rules: [cssLoader]
        },
        plugins
    },
};
