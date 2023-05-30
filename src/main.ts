/*
 * @Description: 
 * @Author: 
 * @Date: 2023-05-29 13:55:47
 * @LastEditTime: 2023-05-30 15:46:11
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import { createApp } from 'vue'
import '@/assets/scss/base.scss'
import App from '@/App.vue'
import router from '@/routes/index'

import "@/utils/rem.js";

createApp(App).use(router).mount('#app')
