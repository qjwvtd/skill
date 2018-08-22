/*
 * 2018/2/9
 * administractor
 */
var fs = require('fs');
module.exports = function(app){
    // catch 404 and forward to error handler
    app.get('*',function(req, res) {
        var err = new Error('Not Found');
        err.status = 404;
        console.log('已发送404页面');
        console.log(err);
        res.sendFile( __dirname + "/" + "resource/404.html" );
    });
};