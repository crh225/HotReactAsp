﻿var webpack = require('webpack');
var path = require('path');
var outFolder = path.resolve(__dirname, "./wwwroot/app");
var isProduction = process.env.NODE_ENV === 'production ';
var jsxLoaders = isProduction ?
    ['babel?presets[]=es2015,presets[]=react&plugins[]=transform-runtime'] :
    ['react-hot', 'babel?presets[]=es2015,presets[]=react&plugins[]=transform-runtime']; // only react hot load in debug build
var entryPoint = './content/app.tsx';
var app = isProduction ? [entryPoint] : [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    entryPoint
];

module.exports = {
    entry: {
        app: app
    },
    output: {
        path: outFolder,
        filename: "[name].js",
        publicPath: 'http://localhost:3000/static/'
    },
    devtool: "source-map",
    minimize: true,
    module: {
        loaders: [{
            test: /\.(js|ts|tsx)$/,
            loaders: [
                 'react-hot',
                 'babel?presets[]=es2015,presets[]=react&plugins[]=transform-runtime',
                 'ts-loader'
            ] ,
            exclude: /node_modules/
        },
        {
            test: /\.(css|less)$/,
            loaders: ['style', 'css', 'less']
        }]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx",'.ts','.tsx']
    },
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" }
    }
};

