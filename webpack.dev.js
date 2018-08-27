const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
//添加热插播
baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "./web"), //定位静态资源到web目录
        open: false, //是否自动打开浏览器
        host: 'localhost',//默认localhost
        port: 9000,
        compress:true,//虚拟服务代码压缩,加快开发流程和优化
        hot: true,//true,webpack4会自动添加HMR插件
    }
});
