import globalAxios from 'axios';
//axios全局设置
//const instance = globalAxios.create({});
//instance.interceptors.request.use(
//    (config) => {
//        const user = JSON.parse(sessionStorage.getItem('USER'));
//        if (user) {
//            instance.defaults.headers.token = user.token;
//            //console.log("TOKEN: "+JSON.stringify(instance.defaults.headers.token));
//        }
//        return config;
//    },
//    (error) => {
//        return Promise.reject(error.response);
//    }
//);
//instance.interceptors.response.use(
//    (response) => {
//        return response;
//    },
//    (error) => {
//        if (error.response) {
//            switch (error.response.status) {
//            case 401:
//                /*返回401表示前端的token已失效,可以和后端约定其他的方式来表示token失效*/
//                //失效后的代码
//            console.log('token 已失效');
//                break;
//            }
//        }
//        return Promise.reject(error.response); //返回接口返回的错误信息
//    }
//);
export const axios = globalAxios;
function setLen(str){
    str = str.toString().length < 2 ? 0 + str.toString() : str;
    return str;
}
//日期格式化
export function formatDate(dateStr,reg) {
    if(!dateStr){
        return;
    }
    let _data = new Date(dateStr);
    let year = _data.getFullYear();
    let month = setLen(_data.getMonth() + 1);
    let date = setLen(_data.getDate());
    let hour = setLen(_data.getHours());
    let minute = setLen(_data.getMinutes());
    let second = setLen(_data.getSeconds());
    let _reg = reg ? reg : '-';
    return {
        'YEAR':year,
        'MONTH':month,
        'DATE':date,
        'YMD':year + _reg + month + _reg + date,
        'HMS':hour + ":" + minute + ":" + second,
        'YMD_HMS':year + _reg + month + _reg + date +  + hour + ":" + minute + ":" + second
    };
}
//字符串去空
export function trim(str){
    return str.replace(/\s+/g, "");
}
//input只能输入数字:<input type="text" onkeydown="onlyInNum(this)"/>
//export function onlyInNum(){
//    const event = e || window.event;
//    if(!((event.keyCode >= 48 && event.keyCode <= 57)||(event.keyCode >= 96 && event.keyCode <= 105))){
//        event.returnValue = false;
//    }
//}

//随机数,返回int以内的随机数(默认10000)
export function ranNumber(int){
    const __int = int ? int : 10000;
    return (Math.random()*__int).toFixed(0);
}
//随机日期、时间
export function ranDate(){
    const current = new Date().getTime();
    const time = parseInt((Math.random() * current).toFixed(0));
    const ranTime = new Date(time);
    const year = ranTime.getFullYear();
    const month = setLen(ranTime.getMonth() + 1);
    const day = setLen(ranTime.getDate());
    const hour = setLen(ranTime.getHours());
    const minute = setLen(ranTime.getMinutes());
    const second = setLen(ranTime.getSeconds());
    return {
        'year':year,
        'month':month,
        'day':day,
        'ymd':year + '-' + month + '-' + day,
        'hms':hour + ":" + minute + ":" + second,
        'ymd_hms':year + '-' + month + '-' + day + " " + hour + ":" + minute + ":" + second
    };
}
//是否是数字
export function isNumber(num){
    //非负浮点数
    const regPos = /^\d+(\.\d+)?$/;
    //负浮点数
    const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
    return regPos.test(num) || regNeg.test(num) ? true : false;
}
//回车事件
export function enterDown(callback){
    document.onkeydown = (event) => {
        let code = event.charCode || event.keyCode;
        if(code == 13){
            //这里是回车后的代码
            callback();
        }
    };
}
//获取页面宽度
export function getPageWidth() {
    const g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}
//获取页面高度
export function getPageHeight() {
    const g = document,
        a = g.body,
        f = g.documentElement,
        d = g.compatMode == "BackCompat" ? a : g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}
//获取鼠标点击时的位置
export function Position(ev) {
    const pageH = document.body.clientHeight;
    const e = event || window.event;
    const x = e.clientX;
    const y = e.clientY;
    const bm = pageH - y;
    return {'x': x, 'y': y, 'bottom': bm};
}

//获取每月天数
export function monthDayCount(year, month) {
    const d = new Date(year, month, 0);
    return d.getDate();
}
