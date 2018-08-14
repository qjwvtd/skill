/**
 * session使用
 * 使用localStorage/sessionStorage封装的Storage类
 * 使用cookie封装的cookie类
 * **/
//Storage
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
//cookie
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