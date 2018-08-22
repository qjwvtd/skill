/*
 * 2018/2/10
 * administractor
 */
module.exports = function(app){

    //user 模块(本案例无MYSQL模块，先屏蔽)
    //var user = require('./../api/user');
    //user(app);

    //读取文件
    var readFileTest = require('./../api/getFileTest');
    readFileTest(app);

};
