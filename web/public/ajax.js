export default class Ajax {
    constructor() {
        this.author = 'qjwvtd';//作者
        this.version = '1.0.0';//版本号
        //处理数据
        this.setQueryString = (obj) => {
            const pa = [];
            for (let key in obj) {
                pa.push(key + '=' + obj[key]);
            }
            const pd = pa.join('&');
            return pd;
        };
    }

    get(o) {
        const XHR = new XMLHttpRequest();
        const data = o.data;
        //拼接字符串
        if (data) {
            const pa = [];
            for (let key in data) {
                pa.push(key + '=' + data[key]);
            }
            const queryString = pa.join('&');
            const dataUrl = o.url + "?" + queryString;
        }
        const url = data ? dataUrl : o.url;
        //配置
        XHR.open("GET", url, true);
        //发送
        XHR.send(null);
        //返回
        XHR.onreadystatechange = () => {
            if(XHR.readyState == 4) {
                if (XHR.status == 200) {
                    o.success(XHR.responseText);
                }
            }else{
                o.error(XHR.xhr + ',' + XHR.status + ',' + XHR.error);
            }
        };
    }

    post(o) {
        const XHR = new XMLHttpRequest();
        const url = o.url;
        const data = o.data;
        const dataType = o.dataType;
        if(!data){
            const t = confirm("http协议规定POST提交的数据必须放在body中,您确定要断续执行？");
            if(!t){return;}
        }
        XHR.open('POST', url, true);
        //默认使用URL编码
        if(!dataType || dataType.toUpperCase() != 'JSON'){
            XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            const pa = [];
            for (let key in data) {
                pa.push(key + '=' + encodeURIComponent(data[key]));
            }
            const queryString = pa.join('&');
            XHR.send(queryString);
        }
        //使用JSON
        if(dataType && dataType.toUpperCase() == 'JSON'){
            XHR.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            XHR.send(JSON.stringify(data));
        }
        //返回
        XHR.onreadystatechange = () => {
            if(XHR.readyState == 4) {
                if (XHR.status == 200) {
                    o.success(XHR.responseText);
                }
            }else{
                o.error(XHR.xhr + ',' + XHR.status + ',' + XHR.error);
            }
        };
    }
}
