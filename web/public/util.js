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
/**
 * 复杂数组去重,如:const testArr = [{id:1,name:'Tom'},{id:1,name:'Pandy'},...]
 * @params arr,需要操作的数组
 * @params kye,String,根据元素的某项属性去重,比如id,unique(testArr,'id')
 **/
export function unique(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
              if (arr[i][key] === arr[j][key]) {
                  arr.splice(j, 1)
                  j--
              }
           }
        }
    return arr
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
/**
 * 防抖函数
 * 只需要在事件触发的第一行调用,如:
 * shakePrevent()
 * @param delay,延迟毫秒,可不传,默认3000
 */
export function shakePrevent (delay) {
    const e = event;
    const _delay = delay ? delay : 3000;
    function getTarget (target) {
        //已到顶层,非button和input类型的按钮
        if (['BODY', 'HTML', '#document'].indexOf(target.nodeName) >= 0) {
            console.log('非button和input类型的按钮,无法设置防抖');
            return e.target;
        }
        const flag = target.nodeName === 'BUTTON' || target.nodeName === 'INPUT';
        return flag ? target : getTarget(target.parentNode);
    }
    const _target = getTarget(e.target);
    _target.disabled = true;
    setTimeout(() => {
        _target.disabled = false;
    }, _delay);
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
//采点工具
function player () {
  //采点
  var pc = document.getElementById('pointerDomContainer');
  pc.onclick = function (e) {
    var item = {};
    item.x = e.offsetX | e.layerX;
    item.y = e.offsetY | e.layerY;
    console.log(item)
  }
  //采集点的移动轨迹,依赖jquery
  var start = false;
  var locus = []
  $(document).mousedown(function () {
    start = true;
    $(document).mousemove(function (e) {
      if (start) {
        var locusItem = {};
        locusItem.x = e.offsetX | e.layerX;
        locusItem.y = e.offsetY | e.layerY;
        locus.push(locusItem);
      }
    });
  }).mouseup(function () {
    start = false;
    console.log(JSON.stringify(locus));
  })
}
//深拷贝
export function deepClone(source, key) {
  const targetObj = source.constructor === Array ? [] : {}
  for (const keys in source) {
    if (source.hasOwnProperty(keys)) {
      if (source[keys] && typeof source[keys] === 'object') {
        targetObj[keys] = source[keys].constructor === Array ? [] : {}
        targetObj[keys] = deepClone(source[keys], key)
      } else {
        if (keys === 'name' && key) {
          targetObj.label = source.name
        } else {
          targetObj[keys] = source[keys]
        }

      }
    }
  }
  return targetObj
}
/**文本框chang事件防抖类
 * @param fn,写自己的处理逻辑
 * @param delay,延迟多少毫秒拿到结果,默认2000
 * @param value,文本框输入的值
 * debounce.init(fn, delay)(value);
 * 如:debounce.init(() => {console.log('在这里写请求')}, 1000)('文本框输入的值');
 **/
export const debounce = {
    timerId: null,
    init(fn, delay) {
        return (...parms) => {
            let args = parms;
            if (this.timerId) { clearTimeout(this.timerId); }
            this.timerId = setTimeout(() => {
                fn.apply(this, args);
            }, delay || 2000);//默认2秒
        };
    }
};
/**
 * react阻止当前事件冒泡
 * @param e,当前事件触发的事件对象,调用:stopeEventPropagation(e)
*/
export function stopeEventPropagation(e) {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
}
/**
*根据key,value,从树里面找到一个节点,return当前节点
*@param treeList,标准的树型结构,必须要有children字段
*@param key,查询的关键属性
*@param value,key的值
*如:queryFindTreeNode(treeList,'id',1),查找treeList中id为3的节点
**/
export function queryFindTreeNode(treeList, key, value) {
    let result = null;
    if (!treeList) {
        return;
    }
    for (let i in treeList) {
        if (result !== null) {
            break;
        }
        let item = treeList[i];
        if (item[key] === value) {
            result = item;
            break;
        } else if (item.children && item.children.length > 0) {
            result = queryFindTreeNode(item.children, key, value);
        }
    }
    return result;
}
//处理树数据,添加字段名key,title,children,删除subsetList
//根据实际情况修改
export function hanldeTreeData(list) {
    if (list.length === 0) { return; }
    const arr = [];
    list.forEach(item => {
        item.title = item.name;
        item.key = item.id;
        item.children = item.subsetList;
        arr.push(item);
        delete item.subsetList;
        if (item.children) {
            return this.hanldeTreeData(item.children);
        }
    });
    return arr;
}
//下载文件
export function downloadFile(url) {
    if (!url) { throw '缺少必要参数url'; }
    if (navigator.userAgent.indexOf('Trident') > -1) {
        //ie
        window.open(url, '_blank');
    } else {
        //非ie
        const a = document.createElement('a'); // 创建a标签
        const e = document.createEvent('MouseEvents'); // 创建鼠标事件对象
        e.initEvent('click', false, false); // 初始化事件对象
        a.href = url; // 设置下载地址
        a.download = ''; // 设置下载文件名
        a.dispatchEvent(e);
    }
}
