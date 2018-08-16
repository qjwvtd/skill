class Ajax {
    constructor() {
        this.xhr = new XMLHttpRequest();
        this.author = 'qjwvtd';//作者
        this.version = '1.0.0';//版本号
    }
    get(o) {
        const XHR = this.xhr;
        const url = o.data ? o.url + "?" + formsParams(o.data) : o.url;
        //配置
        XHR.open("GET", url, true);
        //发送
        XHR.send(null);
        //返回
        XHR.onreadystatechange = () => {
            if(XHR.readyState == 4 && XHR.status == 200){
                o.success(XHR.responseText);
            }else{
                o.error(XHR.xhr + ',' + XHR.status + ',' + XHR.error);
            }
        };
    }
    post(o) {
        const XHR = this.xhr;
        const url = o.url;
        const data = o.data;
        const dataType = o.dataType;
        XHR.open('POST', url, true);
        //默认使用URL编码
        if(!dataType || dataType.toUpperCase() != 'JSON'){
            XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            const queryString = formsParams(data);
            XHR.send(queryString);
        }
        //使用JSON
        if(dataType && dataType.toUpperCase() == 'JSON'){
            XHR.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            XHR.send(JSON.stringify(data));
        }
        //返回
        XHR.onreadystatechange = () => {
            if(XHR.readyState == 4 && XHR.status == 200){
                o.success(XHR.responseText);
            }else{
                o.error(XHR.xhr + ',' + XHR.status + ',' + XHR.error);
            }
        };
    }
}
//ajax发送的数据处理函数
function formsParams(DATA){
    const pa = [];
    for (let key in DATA) {
        pa.push(key + '=' + encodeURIComponent(DATA[key]));
    }
    return pa.join('&');
}
const ajax = new Ajax();
export default ajax;
