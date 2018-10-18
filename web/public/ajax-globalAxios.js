/**
 * 全局axios配置
 * "Authorization":tokens,
 * "Content-Type":"application/json"
 **/
import axios from 'axios';
axios.interceptors.request.use(
    (config) => {
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