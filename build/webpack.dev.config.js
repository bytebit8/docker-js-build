const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: 'bundle[hash].js',
        path: path.resolve(__dirname, '../dist')
    }
};