// src/utils/axios.js
import axios from 'axios'
import Cookies from 'js-cookie'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: 'http://axtl.cn:8086',
  timeout: 5000
})


service.interceptors.request.use(
  config => {
    const token = Cookies.get('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response && error.response.data && error.response.data.msg) {
            ElMessage({
                message: error.response.data.msg,
                type: 'error',
                plain: true,
                duration: 5000
            })
        } else {
            ElMessage({
                message: '发生未知错误，请稍后再试',
                type: 'error',
                plain: true,
                duration: 5000
            })
        }
        return Promise.reject(error)
    }
)

export default service;
