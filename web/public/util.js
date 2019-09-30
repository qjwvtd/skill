//session
export const session = {
    setItem:(key,value) => {
        sessionStorage.setItem(key,JSON.stringify(value));
    },
    getItem:(key) => {
        return JSON.parse(sessionStorage.getItem(key));
    },
    removeItem:(key) => {
        sessionStorage.removeItem(key);
    }
}
//字符串去空
export function stringToTrim(str){
    return str.replace(/\s+/g, "");
}
//随机整数,返回min-max以内(包括min,max)的随机数,(无参数时返回Math.random)
export function ranNumber(min,max){
    if (arguments.length === 1) {
    let min = arguments[0];
    var num = +(Math.random() * min).toFixed(0);
    return num;
  }
  if (arguments.length === 2) {
    let min = arguments[0];
    let max = arguments[1];
    return +((Math.random() * (max - min) + min).toFixed(0));
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
//随机字符串
export function randomString(len) {
    len = len || 6;
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    const maxPos = $chars.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
}
//比较两个对象是否相等
export function diff(a,b){
    const A = a instanceof Object;
    const B = b instanceof Object;
    /*is Object,是否是两个对象*/
    if(!A || !B){
        return a === b;
    }
    /*is same length,key是不是一样*/
    if(Object.keys(a).length !== Object.keys(b).length){
        return false;
    }
    /*equl*/
    for(const key in a){
        const itemA = a[key] instanceof Object;
        const itemB = b[key] instanceof Object;
        if(itemA && itemB){
            return diff(a[key],b[key]);
        }
        if(a[key] !== b[key]){
            return false;
        }
    }
    return true;
}
//加入收藏夹
export function addFavorite(url, title) {
    try {
        window.external.addFavorite(url, title);
    } catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        } catch (event) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
//查看元素的几何尺寸(left top right bottom width height)
export function getElementRect(element){
    const rect = element.getBoundingClientRect();
    return rect;
}
//匹配移动电话
export function isMobile(obj) {
    if (!(/^1[3|5|8][0-9]\d{4,8}$/.test(obj))) {
        return false;
    }
    return true;
}


//匹配电子邮件
export function isemail(obj) {
    const result = obj.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if (result == null) {
        return false;
    }
    return true;
}
//拆分整数与小数
export function splits(tranvalue) {
    let arr = new Array('','');
    const temp = tranvalue.split(".");
    for (let i = 0; i < temp.length; i++) {
        arr = temp;
    }
    return arr;
}
/** 
 * 获取指定的URL参数值 
 * URL:http://www.quwan.com/index?name=tyler 
 * 参数：paramName URL参数 
 * 调用方法:getUrlParams("name") 
 * 返回值:tyler 
 */
export default function getUrlParams(paramName) {
  const str = window.location.hash;
  const xh = str.indexOf('?');
  const query = str.substr(xh + 1, str.length);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === paramName) {
      return pair[1];
    }
  }
  return false;
}
/**
 * 取出数组中随机几项元素
 * arr原数组,count随机取出的个数
 */
export function getRandomArrayElements (arr, count) {
  let shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
//js无限向上滚动函数
function Marquee (elId, options) {
  if (!elId) {
    console.log('滚动缺少必要参数');
    return;
  }
  //滚动的元素id,必传
  this.scrollElId = elId;
  //滚动高度,在css中设置过可不传,默认240px,string格式:'200px'/'50%'
  this.scrollHeight = options.scrollHeight || '240px';
  //滚动开始位置,默认0,可不传
  this.scrollStart = options.scrollStart || 0;
  //滚动速度,默认50,可不传
  this.scrollSpeed = options.scrollSpeed || 50;
};
Marquee.prototype.init = function () {
  var mc = document.getElementById(this.scrollElId).parentNode;
  mc.style.height = this.scrollHeight;
  mc.style.overflow = 'hidden';
  mc.style.width = 'auto';
  this.mp = mc;
  this.ms = document.getElementById(this.scrollElId);
  this.md = this.ms.cloneNode(true);
  this.md.id = '';
  this.mp.appendChild(this.md);
  var self = this;
  this.setinterval = setInterval(function () {
    self.start(self.mp, self.ms, self.md);
  }, self.scrollSpeed);
  this.mp.onmouseover = function (e) {
    clearInterval(self.setinterval);
    return;
  }
  this.mp.onmouseout = function (e) {
    self.setinterval = setInterval(function () {
      self.start(self.mp, self.ms, self.md);
    }, self.scrollSpeed);
  }
}
Marquee.prototype.start = function () {
  const showHeight = (this.ms.clientHeight * 2) - this.mp.clientHeight;
  if (this.md.offsetTop - this.mp.scrollTop <= 0) {
    this.scrollStart -= this.ms.offsetHeight;
  } else {
    this.scrollStart = this.scrollStart + 1;
  }
  if (this.scrollStart == showHeight) {
    this.scrollStart = 0;
  }
  this.mp.scrollTop = this.scrollStart;
}

//格式化日期
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,                 //月份 
    "d+": this.getDate(),                    //日 
    "h+": this.getHours(),                   //小时 
    "m+": this.getMinutes(),                 //分 
    "s+": this.getSeconds(),                 //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds()             //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}
