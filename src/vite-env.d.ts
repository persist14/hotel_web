/*
 * @Description: 
 * @Author: 
 * @Date: 2023-05-31 08:41:08
 * @LastEditTime: 2023-06-16 09:58:11
 * @LastEditors: 
 * @Reference: 
 */
/// <reference types="vite/client" />
// 解决ts不识别vue文件报错问题
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}
interface ImportMetaEnv {
    readonly HT_MAP_KEY: string
    // 更多环境变量...
}