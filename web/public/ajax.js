/*
 跨域资源共享:https://www.cnblogs.com/loveis715/p/4592246.html
 CORS（Cross-Origin Resource Sharing）
 三种请求:
 1、Simple Request----简单请求，GET，HEAD或POST之一,没有自定义请求头
 2、Preflighted Request----预置请求，GET，HEAD或POST之一，自定义请求头或者Content-Type也不是application/x-www-form-urlencoded,multipart/form-data或text/plain之一
 3、Requests with Credential----使用凭证请求，发送请求的时候需要将用户凭证包含在请求中，XHR.withCredentials = true
 《集成对CORS的支持》
 在使用CORS来访问数据的时候，客户端不需要更改任何数据访问逻辑。
 所有的一切工作都是在服务端及浏览器之间自动完成的。
 因此需要为一个系统集成CORS支持，工作主要集中在服务端。
 集成工作实际上十分简单：在的web.xml中添加一个Filter（或利用已有的Filter）并根据传入的请求首先判断其是哪一种CORS请求。
 在得知了请求的类型后，就可以决定到底以哪种方式响应用户。
*/

class Ajax {
    constructor() {
        this.xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        this.author = 'qjwvtd';//作者
        this.version = '1.0.0';//版本号
    }
    get(o) {
        try{
            const XHR = this.xhr;
            const url = o.data ? o.url + "?" + formsParams(o.data) : o.url;
            //配置
            XHR.open("GET", url, true);
            //凭证(一般用于跨域设置)
            //XHR.withCredentials = true;
            //发送
            XHR.send(null);
            //返回
            XHR.onload = () => {
                if((XHR.status >= 200 && XHR.status < 300) || XHR.status == 304){
                    o.success(XHR.responseText);
                }else{
                    o.error(XHR.response);
                }
            };
        }catch(e) {
            o.error(e.message);
        };

    }
    post(o) {
        try{
            const XHR = this.xhr;
            const url = o.url;
            const data = o.data;
            const dataType = o.dataType;
            XHR.open('POST', url, true);
            //凭证(一般用于跨域设置)
            //XHR.withCredentials = true;
            //默认使用URL编码
            if(!dataType || dataType.toUpperCase() != 'JSON'){
                XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                const queryString = formsParams(data);
                XHR.send(queryString);
            }
            //使用JSON
            if(dataType && dataType.toUpperCase() == 'JSON'){
                XHR.setRequestHeader('Content-Type', 'application/json');
                XHR.send(JSON.stringify(data));
            }
            //返回
            XHR.onload = () => {
                if((XHR.status >= 200 && XHR.status < 300) || XHR.status == 304){
                    o.success(XHR.responseText);
                }else{
                    o.error(XHR.response);
                }
            };
        }catch(e) {
            o.error(e.message);
        }
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
