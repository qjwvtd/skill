import axios from 'axios'

const author = 'Authorization'

axios.interceptors.request.use(
  config => {
    const token = '一个假的token字符串,用的时候要换成真实token字符串'
    if (token) {
      config.headers.common[author] = 'Bearer' + token
    }
    return config
  }, error => Promise.reject(error)
)

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
  //有响应时做一些检查
  return response
}

function checkCode(res, errMsg) {
  //错误时做一些检查
  return res.data
}

export default {
  POST(url, data, errMsg) {
    return axios.post(url, data, {
      timeout: 30000
    }).then(checkStatus).then(res => checkCode(res, errMsg))
  },
  GET(url, params, errMsg) {
    return axios.get(url, {
      params: {
        _t: +(new Date()),
        ...params
      },
      timeout: 30000
    }).then(checkStatus).then(res => checkCode(res, errMsg))
  },
  DELETE(url, errMsg) {
    return axios.delete(url, {
      timeout: 30000
    }).then(checkStatus).then(res => checkCode(res, errMsg))
  },
  PUT(url, data, errMsg) {
    return axios.put(url, data, {
      timeout: 30000
    }).then(checkStatus).then(res => checkCode(res, errMsg))
  }
}
