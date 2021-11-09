//是否是数字
export function isNumber(value) {
    return +(value) % 1 >= 0 || +(value) % 1 < 0;
}
//判断数据类型
export function isType(param){
    return Object.prototype.toString.call(param);
}
//新密码必须包含大写字母,小写字母,数字和特殊字符@$!%*?&,长度8-20位
export function isPassword(value){
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/g;
    return reg.test(value);
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
//移动电话
export function isMobile(obj) {
    if (!(/^1[3|5|8][0-9]\d{4,8}$/.test(obj))) {
        return false;
    }
    return true;
}
//是否合法的日期
export function isDate(val){
    return !Number.isNaN(new Date(...val).valueOf());
}

//电子邮件
export function isEmail(obj) {
    const result = obj.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if (result == null) {
        return false;
    }
    return true;
}
