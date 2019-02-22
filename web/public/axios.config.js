/**
 * 全局axios配置
 * "Authorization":tokens,
 * 【"Content-Type":"application/json"】--非简单请求
 * 非简单请求需要额外处理：
 * Access-Control-Allow-Origin；
 * Access-Control-Allow-Methods：对客户端回应服务器支持的请求方法列表；
 * Access-Control-Allow-Headers：对客户端回应服务器支持的Header；
 * 【application/x-www-form-urlencoded】--简单请求
 * 【multipart/form-data】--简单请求
 * 【text/plain】--简单请求

 **/
import axios from 'axios';
/**
 * 全局root
 * */
const  webRoot = 'http://x.x.x.x:xxxx';
/**
 * 全局http配置
 * */
const instance = axios.create({
    baseURL:webRoot,
    timeout: 5000,
    transformRequest: [function (data) {
        //对请求数据进行处理
        return data;
    }],
    transformResponse: [function (data) {
        //对响应数据进行处理
        return data;
    }],
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    }
});
/**
* 拦截请求
* */
instance.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('AUTH_TOKEN');
        config.headers.common['Authorization'] = 'Bearer ' + token;
        console.log(config);
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
);
export default instance;
