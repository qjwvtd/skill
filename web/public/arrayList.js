/**
 * 模拟数组及其方法
 **/
export default class ArrayList{
    constructor(arrayObject){
        this.array = arrayObject ? arrayObject : [];
    }
    //比较两个对象是否相等
    diff(a,b){
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
                return this.diff(a[key],b[key]);
            }
            if(a[key] !== b[key]){
                return false;
            }
        }
        return true;
    }
    //数组是否包含，参数可以是一个值，也可以是一个对象
    includes(obj){
        const arr = this.array;
        if(!obj || arr.length == 0){
            throw('参数无效！');
        }
        if(typeof obj === 'object'){
            const keys = Object.keys(obj);
            for(let i=0;i<arr.length;i++){
                return this.diff(arr[i],obj);
            }
        }else{
            return arr.indexOf(obj) == -1 ? false : true;
        }
    }
}