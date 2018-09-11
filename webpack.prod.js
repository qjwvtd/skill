const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.js');

//const HtmlWebpackPlugin = require('html-webpack-plugin');
//baseConfig.entry.vendor = ['react','react-dom'];
//baseConfig.optimization = {
//    minimize:true,
//    runtimeChunk: {
//        name: "manifest"
//    },
//    splitChunks: {
//        cacheGroups: {
//            common: {
//                chunks: "all",
//                    name: "common",
//                    minChunks: 2,
//                    maxInitialRequests: 5,
//                    minSize: 0
//            },
//            vendor: {
//                test: /node_modules/,
//                    chunks: "all",
//                    name: "vendor",
//                    priority: 10,
//                    enforce: true
//            }
//        }
//    }
//};
module.exports = merge(baseConfig, {
    mode: 'production'
});
