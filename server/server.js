/*
 * 2018/2/9
 * administractor
 */
/*
 * 2018/2/8
 * administractor
 */
var path = require('path');
var express = require('express');
var app = express();
var port = require('./mine').service.port;
var host = require('./mine').service.host;
//定位静态资源到web目录
var root = __dirname.replace('server','web');
app.use(express.static(path.join(root)));
//设置跨域访问
//app.all('*', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//    res.header("X-Powered-By",' 3.2.1');
//    res.header("Content-Type", "application/json;charset=utf-8");
//    next();
//});
//路由
var router = require('./routes/router');
router(app);

//404 处理的引入要放在最后面
var Error = require('./404');
Error(app);

//开启服务
app.listen(port,host,function(){
    console.log('server start success,' + 'http://'+ host + ':' + port);
});
