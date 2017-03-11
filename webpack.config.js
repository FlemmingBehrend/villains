const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/client/index'),
    output: {
        path: path.join(__dirname, '/dist/client'),
        filename: 'villains.js',
        publicPath: '/dist/client/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ['raw-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/client/index.html'),
        }),
    ]
};