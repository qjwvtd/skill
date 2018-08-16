/**
 * 关于数组的一些方法
 **/
class MyArray{
    //纯数组去重['A','B','C','A','C','D'],返回新数组
    removeRepet(arr){
        const newArr = [];
        const __set = new Set(arr);
        for(const val of __set){
            newArr.push(val);
        }
        return newArr;
    }
    //纯数组包含某值[a,b,c,d,...],返回boolean
    includesItem(arr,arrItem){
        return arr.includes(arrItem);
    }
    //根据参数项(比如ID)替换数组项，返回新数组,数组必须是[{},{},...]格式
    replaceItem(arr,arrItem,itemArguments){
        const len = arr.length;
        for(let i=0;i<len;i++){
            if(arr[i][itemArguments] == arrItem[itemArguments]){
                arr[i] = arrItem;
            }
        }
        return arr;
    }
}
const array = new MyArray();
export default array;