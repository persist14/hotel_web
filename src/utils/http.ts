/*
 * @Description: 
 * @Author: 
 * @Date: 2023-06-02 14:04:30
 * @LastEditTime: 2023-06-02 14:09:52
 * @LastEditors: 
 * @Reference: 
 */
import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    timeout: 3000,

})

instance.interceptors.request.use((config) => {
    console.log(config.url);
    return config
})
instance.interceptors.response.use((response) => {
    console.log(response.status);
    return response
})

export default instance