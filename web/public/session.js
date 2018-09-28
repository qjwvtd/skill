/**
 * session使用
 * 使用localStorage/sessionStorage封装的Storage类
 * 使用cookie封装的cookie类
 * **/
//Storage(支持现代浏览器)
export class Storage {
    setItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    removeItem(key) {
        sessionStorage.removeItem(key);
    }
}
//cookie(本地支持IE,本地高级浏览器不支持，布署后服务器支持)
export class Cookie {
    setCookie(name, value, delay) {
        /**
         * delay:cookie有效期限,默认1天，天数，如：1
         **/
        const Days = delay ? delay : 1; //默认保存1天
        const exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
    }

    getCookie(name) {
        const arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) {
            return arr[2];
        } else {
            return null;
        }
    }

    removeCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if (cval != null) {
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    }
}