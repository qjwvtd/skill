/*
 * 2018/6/27
 * administractor
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清除已经build过的文件

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: path.resolve(__dirname, './web/src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './web/dist/'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0']
                    }
                },
                include: path.resolve(__dirname, './web'),
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: {loader: 'eslint-loader'},
                include: path.resolve(__dirname, './web'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
                include: path.resolve(__dirname, './web'),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
                include: path.resolve(__dirname, './web'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{loader: 'url-loader', options: {limit: 8192}}],
                include: path.resolve(__dirname, './web'),
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff)/,
                use: [{loader: 'file-loader'}],
                include: path.resolve(__dirname, './web'),
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),//清除dist目录中已经build过的文件
        new webpack.LoaderOptionsPlugin({
            test: /\.(js|jsx)$/,
            options:{
                eslint: './.eslintrc'
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "index.css"
        })
    ]
};