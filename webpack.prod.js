const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.js');

//const HtmlWebpackPlugin = require('html-webpack-plugin');
//baseConfig.entry.vendor = ['react','react-dom'];
//baseConfig.optimization = {
//    splitChunks: {
//        chunks: "all",
//            minChunks: 1,
//            minSize: 0,
//            cacheGroups: {
//            vendor: {
//                test: "vendor",
//                name: "vendor"
//            }
//        }
//    }
//};
module.exports = merge(baseConfig, {
    mode: 'production'
});
