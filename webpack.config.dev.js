const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: ['babel-polyfill', path.join(__dirname, './src/client/main.jsx')],
        vendor: [
            "react",
            "react-dom"
        ]
    },
    output: {
        path: path.join(__dirname, './src/public/js/bundle'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?name=fonts/[name]/[name].[ext]',
                exclude: /node_modules/
            },
            {
                test   : /\.(jpg|png|gif)(\?[a-z0-9=&.]+)?$/,
                loader: 'url-loader',
                exclude: /node_modules/
            }

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("development")
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            file: "[name].bundle.js",
            minChunks: 2
        })
    ]
};
