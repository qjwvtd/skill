const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode:'development',//development/production
    entry: {
        index: path.resolve(__dirname, './src/js/index.js')
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
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader', options: {modules: true, localIdentName: '[name]__[local]--[hash:base64:8]'}}
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: [{loader: 'url-loader', options: {limit: 8192}}]
            },
            {
                test: /\.(eot|svg|ttf|woff)/,
                exclude: /node_modules/,
                use: [{loader: 'file-loader'}]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, "./web"), //定位静态资源到web目录
        open: false, //是否自动打开浏览器
        host:'localhost',
        port: 3333,
        hot: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
};