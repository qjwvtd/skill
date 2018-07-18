const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

//const HtmlWebpackPlugin = require('html-webpack-plugin');
//common.entry.vendor = ['react','react-dom'];
//common.optimization = {
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
module.exports = merge(common, {
    mode: 'production'
});
