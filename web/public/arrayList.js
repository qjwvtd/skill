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
    //获取下标，参数：纯数组传具体的值，对象数组传key和对应的value
    getIndex(key,value){
        const arr = this.array;
        if(!key){
            return 'Invalid parameter';
        }
        if(key && !value){
            for(let i=0;i<arr.length;i++){
                if(key == arr[i]){
                    return i;
                }
            }
        }
        if(key && value){
            for(let i=0;i<arr.length;i++){
                if(arr[i][key] == value){
                    return i;
                }
            }
        }
    }
    //数组升序排列
    rise(){
        const arr = this.array;
        return arr.sort((a,b) => {
            if(a < b){
                return -1;
            }else if(a > b){
                return 1;
            }else{
                return 0;
            }
        });
    }
    //数组倒序排列
    inverted(){
        const arr = this.array;
        return arr.sort((a,b) => {
            if(a < b){
                return 1;
            }else if(a > b){
                return -1;
            }else{
                return 0;
            }
        });
    }
}