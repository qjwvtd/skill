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

//js判断浏览器的userAgent，用正则来判断是否是ios和Android客户端
export function getNavigatorInfo(){
    const u = navigator.userAgent;
    const app = navigator.appVersion;//返回浏览器版本
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    const isWindow = u.indexOf('Windows') > -1;//pc端windows
    return 'Android：'+isAndroid+'\n'+'ios：'+isiOS+'\n'+'Window: '+isWindow+'\n'+"verson info:"+app;
}
