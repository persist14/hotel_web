/*
 * @Description: 
 * @Author: 
 * @Date: 2023-05-29 13:55:47
 * @LastEditTime: 2023-05-31 13:44:29
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

createApp(App).use(router).use(pinia).mount('#app')
