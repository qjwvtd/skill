/**
 * Created by Administrator on 2018/4/7/007.
 */
var fs = require('fs');

module.exports = function(app){
    //读取图片
    app.get('/getImgFile',function(req,res){
        var resource = __dirname.replace('api','resource');
        var _img = resource+'\\404.jpg';
        var imgData = fs.readFileSync(_img);
        var base64Str = imgData.toString('base64');
        var dataUri = 'data:image/jpeg;base64,' + base64Str;
        res.send('<img src="'+dataUri+'" style="width:50%">');
    });

    //读取json
    app.get('/getJsonFile',function(req,res){
        var resource = __dirname.replace('api','resource');
        var _json = resource+'\\testJson.json';
        var jsonData = fs.readFileSync(_json,'utf-8');
        res.send(jsonData);
    });
};
