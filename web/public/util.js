import React,{Component} from 'react';
import ReactDOM from 'react-dom';
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

//session
export class Session{
    setItem(key,value){
        sessionStorage.setItem(key,JSON.stringify(value));
    }
    getItem(key){
        return JSON.parse(sessionStorage.getItem(key));
    }
    removeItem(key){
        sessionStorage.removeItem(key);
    }
}

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
//常用图表颜色，分别是 【优，良，中，差】
export const echartDefaultColor = ['#3b86ff','#64e3a3','#ff8373','#a3a0fb'];
//随机数
export function ranNumber(int){
    //返回int以内的随机数
    return (Math.random()*int).toFixed(0);
}
//随机日期、时间
export function ranDate(){
    const ran = (Math.random()*1000000000000).toFixed(0);
    const ranTime = new Date().getTime() - parseInt(ran);
    const dateNum = new Date(ranTime);
    const year = dateNum.getFullYear();
    const month = setLen(dateNum.getMonth() + 1);
    const date = setLen(dateNum.getDate());
    const hour = setLen(dateNum.getHours());
    const minute = setLen(dateNum.getMinutes());
    const second = setLen(dateNum.getSeconds());
    return {
        'YEAR':year,
        'MONTH':month,
        'DATE':date,
        'YMD':year + '-' + month + '-' + date,
        'HMS':hour + ":" + minute + ":" + second,
        'YMD_HMS':year + '-' + month + '-' + date + " " + hour + ":" + minute + ":" + second
    };
}
export function isNumber(num){
    return /^\d|\d.\d$/.test(num);
}
export class Checkbox extends Component{
    //<Checkbox checked="checked" onChange={this.onChange.bind(this)} />
    constructor(props){
        super(props);
    }
    onClick(event){
        const checkbox = event.currentTarget;
        const className = checkbox.className;
        switch (className){
        case 'checkbox active':
        checkbox.className = 'checkbox';
        this.props.onChange(false);
            break;
        case 'checkbox':
        checkbox.className = 'checkbox active';
        this.props.onChange(true);
            break;
        }
    }
    render(){
        const isChecked = this.props.checked == 'checked' ? 'checkbox active' : 'checkbox';
        return (
            <span className={isChecked} onClick={this.onClick.bind(this)}></span>
        );
    }
}
//数组去重复
export function arrayRepet(arr){
    //arr:['a','b','c','a','c','b']
    const newArr = [];
    const __set = new Set(arr);
    for(const val of __set){
        newArr.push(val);
    }
    return newArr;
}
//数组中是否包含某个值
export function isIncludes(arr,arrItem){
    return arr.includes(arrItem);
}
//回车事件
export function enterEvent(){
    document.onkeydown = (event) => {
        let code = event.charCode || event.keyCode;
        if(code == 13){
            //这里是回车后的代码
            alert('Enter`s code is here');
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

export class Cookie{
    setCookie(name,value){
        document.cookie = name + "=" + value;
    }
    getCookie(name){
        const cName = name + "=";
        const ca = document.cookie.split(';');
        for(let i=0; i<ca.length; i++){
            const c = ca[i].trim();
            if(c.indexOf(cName) == 0) {
                return c.substring(cName.length,c.length);
            };
        }
        return "";
    }
}