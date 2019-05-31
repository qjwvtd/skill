function ParamsType(){}
ParamsType.prototype.isArray = function(params){
    return '[object Array]' === Object.prototype.toString.call(params);
}
ParamsType.prototype.isString = function(params){
    return '[object String]' === Object.prototype.toString.call(params);
}
ParamsType.prototype.isObject = function(params){
    return '[object Object]' === Object.prototype.toString.call(params);
}
ParamsType.prototype.isDate = function(params){
    return '[object Date]' === Object.prototype.toString.call(params);
}
ParamsType.prototype.isNumber = function(params){
    return '[object Number]' === Object.prototype.toString.call(params);
}
ParamsType.prototype.isNull = function(params){
    return '[object Null]' === Object.prototype.toString.call(params);
}
ParamsType.prototype.isUndefined = function(params){
    return '[object Undefined]' === Object.prototype.toString.call(params);
}
ParamsType.prototype.isFunction = function(params){
    return '[object Function]' === Object.prototype.toString.call(params);
}
ParamsType.prototype.isBoolean = function(params){
    return '[object Boolean]' === Object.prototype.toString.call(params);
}
ParamsType.prototype.isBoolean = function(params){
    return '[object Boolean]' === Object.prototype.toString.call(params);
}
ParamsType.prototype.isNaN = function(params){
    return isNaN(params);
}
export default new ParamsType();
