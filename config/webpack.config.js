const webpack = require('webpack');

let config = {
    entry: `${__dir}/server.js`,
    output: {
        path: `${__dir}/dist`,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('菜鸟教程 webpack 实例')
    ]
};

module.exports = config;