const path = require('path');
const webpack = require('webpack');
const ClientConfig = require('./client.config.json');

module.exports = {
    entry: {
        app: [path.join(__dirname, './src/client/main.js')],
        vendor: [
            "@cycle/dom",
            "@cycle/run"
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
            'process.env': {
                'NODE_ENV'  : JSON.stringify("production"),
                'CLIENT'    : JSON.stringify(ClientConfig)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            file: "[name].bundle.js",
            minChunks: 2
        })
    ]
};
