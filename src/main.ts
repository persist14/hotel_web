/*
 * @Description: 
 * @Author: 
 * @Date: 2023-05-29 13:55:47
 * @LastEditTime: 2023-06-25 16:03:30
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import {createApp} from 'vue'
import '@/assets/scss/base.scss'
import App from '@/App.vue'
import router from '@/routes/index'
import {createPinia} from 'pinia'

const pinia = createPinia()

import "@/utils/rem.js";
import '@/utils/loadMapApi.js'
import 'https://mapapi.qq.com/web/mapComponents/geoLocation/v/geolocation.min.js'
import 'vant/es/toast/style';
createApp(App).use(router).use(pinia).mount('#app')
