import axios from 'axios'
// import at from '@constants'
import Cache from '../cache'

const cache = new Cache()

const service = axios.create({
  baseURL: '/api', // 和craco.config.js中pathRewrite 匹配
  // withCredentials: true,
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  },
});

// request interceptor
service.interceptors.request.use(
  config => {
    const TOKEN = '' // at.getToken()
    if (TOKEN) {
      config.headers['Authorization'] = TOKEN
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (parseInt(res.code) === 404) {
      return Promise.reject('error')
    } else {
      cache.set(response.request.responseURL, res)
      return Promise.resolve(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service

