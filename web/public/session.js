/**
 * session使用
 * 使用localStorage/sessionStorage封装的Storage类
 * 使用cookie封装的cookie类
 * **/
//Storage(支持现代浏览器)
export class Storage{
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
//cookie(本地支持IE,本地高级浏览器不支持，布署后服务器支持)
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