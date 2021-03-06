const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清除已经build过的文件

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, './web/src/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './web/build/'),
        publicPath: '/build/'
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
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: {loader: 'eslint-loader'},
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{loader: 'url-loader', options: {limit: 8192}}],
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff)/,
                use: [{loader: 'file-loader'}],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new CleanWebpackPlugin(['./web/build']),//清除dist目录中已经build过的文件
        new webpack.LoaderOptionsPlugin({
            test: /\.(js|jsx)$/,
            options:{
                eslint: './.eslintrc'
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "index.css"
        }),
        //开发环境下可以作一些压缩，加快热更新速度
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};

module.exports = webpackConfig;