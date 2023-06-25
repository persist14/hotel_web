/*
 * @Description: 
 * @Author: 
 * @Date: 2023-06-02 14:04:30
 * @LastEditTime: 2023-06-25 16:37:14
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import axios from 'axios'
import { showToast } from 'vant'
const instance = axios.create({
    baseURL: '/api',
    timeout: 3000,

})

instance.interceptors.request.use((config) => {
    // 规避登录注册以及获取地图信息接口
    const noToken = ['/login', '/register', '/trans']
    if (!noToken.includes(config.url || '')) {
        config.headers.Authorization = localStorage.getItem('token')
    }
    return config
})
instance.interceptors.response.use((response) => {
    if (response.data.success) return Promise.resolve(response)
    const { msg, code } = response.data
    // 请求错误处理
    switch (code) {
        case 401:
            localStorage.removeItem('token')
            showToast({
                message: '登录信息过期，请重新登录。',
                duration: 3000,
                type: 'fail'
            })
            break;
        default:
            showToast({
                message: msg,
                duration: 3000,
                type: 'fail'
            })
    }


    return Promise.reject(msg)
})

export default instance