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
//字符串去空
export function trim(str){
    return str.replace(/\s+/g, "");
}
//随机整数,返回min-max以内(包括min,max)的随机数,(无参数时返回Math.random)
export function ranNumber(min,max){
    if(typeof min != 'number' || typeof max != 'number'){
        return 'parameter is error';
    }
    //无参
    if(!min && !max){
        return Math.random();
    }
    //一个参数
    if(min && !max){
        return ((Math.random())*min).toFixed(0);
    }
    //两个参数
    if(min && max){
        return ((Math.random())*(max - min)).toFixed(0);
    }
}
//是否是数字
export function isNumber(num) {
    //严格模式,必须传入number类型
    if(typeof num !== 'number'){
        console.warn('警告:参数类型为' + typeof num + ',不匹配');
        return false;
    }
    const zreo = /^[0]+$/;//0也是数字
    const positive = /^[1-9]+$|^[0]{1}[.]{1}[0-9]+$|^[1-9]+[.]{1}[0-9]+$/;//匹配正数
    const negative = /^[-]{1}[1-9]+$|^[-]{1}[0]{1}[.]{1}[0-9]+$|^[-]{1}[1-9]+[.]{1}[0-9]+$/;//匹配负数
    return positive.test(num) || negative.test(num) || zreo.test(num) ? true : false;
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
//生成随机字符串
export function randomString(length) {
    let rdmString = "";
    for(let i=0;i<length;i++){
        if(rdmString.length < length){
            rdmString  += Math.random().toString(36).substr(2).toUpperCase();
        }
    }
    return  rdmString.substr(0, length);
}
//随机颜色
export function randomColor(){
    return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
}
// 对象
export function isObject(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === 'Object';
}
// 数组
export function isArray(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === 'Array';
}
// 函数
export function isFunction(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === 'Function';
}
//四舍五入
export function round(v, p) {
    /*
     *v：值，p:精度,如round(123.321,2) => 123.32
     */
    p = Math.pow(10, p >>> 31 ? 0 : p | 0);
    v *= p;
    return (v + 0.5 + (v >> 31) | 0) / p;
}
//在浏览器中根据url下载文件
export function browserDownload(url){
    const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        const link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) {
            const fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            const e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf('?') === -1) {
        url += '?download';
    }
    window.open(url, '_self');
    return true;
}
//快速生成UUID
export function setUuid() {
    let d = new Date().getTime();
    const fmt = 'xxxxxxxxxxxx-xxxx-xxxx-xxxxxxxxxxxx';//uuid格式
    const uuid = fmt.replace(/[xy]/g, function(c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16).toUpperCase();
    });
    return uuid;
};