var mysql = require('mysql');
var http = require('http');
var querystring = require('querystring');
//require
var request = require('request');
// post方式提交过来的数据需要解析
var parse = require('body-parser');
var _parse = parse.urlencoded({extended:false});

module.exports = function(app){
    //post请求
    app.post('/login', _parse, function(req, res){
        var thisUser = req.body.userName;
        var thisPwd = req.body.password;
        console.log(thisUser);
        console.log(thisPwd);
        var sqlStr = 'select * from t_user where username="'+thisUser+'" and password ="'+ thisPwd +'"';
        queryDatabaseCallBack(sqlStr,function(data){
            if(data.length > 0){
                var _suc_data = {};
                _suc_data.state = 0;
                _suc_data.data = {"userid":data[0].userid,"name":data[0].username,"nickname":data[0].nickname};
                _suc_data.message = '登陆成功!';
                res.send(_suc_data);
            }else{
                var _err_data = {};
                _err_data.state = 1;
                _err_data.message = '账号或密码不正确!';
                res.send(_err_data);
            }
        });
    });
    //test getUserInfo
    app.get('/getUserInfo',_parse,function(req, res){
        var getUserSql = 'select * from t_user';
        queryDatabaseCallBack(getUserSql,function(data){
            res.send(data);
        });
    });
    //get方式获取外部接口(不发送数据)
    app.get('/getHttpResultApiData',_parse,function(req,res){
        //使用自已的getUserInfo接口做测试
        request('http://localhost:9000/getUserInfo',function(error, response, body){
            if (error) {
                console.log(error);
            }
            if (res.statusCode == 200) {
                console.log('success:'+JSON.stringify(body));
                res.send(body);
            }
        });
    });
    //post获取数据(发送数据)
    app.post('/postHttpResultApiData',_parse,function(req,res){
        var _data = req.body;
        _data = querystring.stringify(_data);
        //芜湖获取分页接口
        try {
            var option = {
                url: 'http://192.168.10.18:8888/beam-field/ledger/page',
                method: "POST",
                json: true,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                body: _data
            };
            request(
                option,
                function(error, response, body){
                    if (res.statusCode == 200) {
                        console.log('success return:'+JSON.stringify(body));
                        res.send(body);
                    }
                    if (error) {
                        console.log('error:'+error);
                    }
                }
            );
        } catch (e){
            console.log('error:'+e);
        }
    });
};

function queryDatabaseCallBack(sql,callback){
    var dataBase = {
        host : 'localhost',
        user : 'root',
        password : '123456',
        database : 'test'
    };
    var conn = mysql.createConnection(dataBase);
    conn.connect();
    conn.query(sql, function (error, data, fields) {
        callback(data);
    });
    conn.end();
}