/**
 * 关于数组的一些方法
 **/
class MyArray{
    //根据key或value获取下标
    getIndex(arr,key,value){
        if(!arr || !key){
            return;
        }
        for(let i=0;i<arr.length;i++){
            if(arr[i] == key){
                return i;
            }
            if(arr[i][key] == value){
                return i;
            }
        }
    }
    //纯数组去重['A','B','C','A','C','D'],返回新数组
    removeRepet(arr){
        const newArr = [];
        const __set = new Set(arr);
        for(const val of __set){
            newArr.push(val);
        }
        return newArr;
    }
    //数组包含某条[a,b,c,d,...],返回boolean
    includesItem(arr,key,value){
        if(key[value]){
            for(let i=0;i<arr.length;i++){
                if(arr[i][key] == value){
                    return true;
                }
            }
        }else{
            return arr.includes(key);
        }
    }
    //数组删除某项,返回新数组
    deleteItem(arr,key,value){
        if(!arr || !key){
            return;
        }
        const tempArray = arr.slice(0);//复制数组到临时数组
        for(let i=0;i<tempArray.length;i++){
            if(tempArray[i] == key){
                tempArray.splice(i, 1);//注意:会将所有的key都删除
            }
            if(tempArray[i][key] == value){
                tempArray.splice(i, 1);
            }
        }
        return tempArray;
    }
    //根据参数项(比如ID)替换数组项，返回新数组,数组必须是[{},{},...]格式
    replaceItem(arr,arrItem,key){
        const len = arr.length;
        for(let i=0;i<len;i++){
            if(arr[i][key] == arrItem[key]){
                arr[i] = arrItem;
            }
        }
        return arr;
    }
    //纯数字数组求最大,[14,12,32,65,23,45,85,10]
    max(numberArr){
        return Math.max(...numberArr);
    }
    //纯数字数组求最小,[14,12,32,65,23,45,85,10]
    min(numberArr){
        return Math.min(...numberArr);
    }
}
const array = new MyArray();
export default array;