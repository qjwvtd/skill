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
axios.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';//改为简单请求
        // 这里token需要在登录时存储起来
        const token = sessionStorage.getItem("token");
        if (token) {
            // 将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
            config.headers.Authorization = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default axios;