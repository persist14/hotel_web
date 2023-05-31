/*
 * @Description: 
 * @Author: 
 * @Date: 2023-05-31 13:44:59
 * @LastEditTime: 2023-05-31 15:13:17
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import { defineStore } from 'pinia'
type AppStore = {
    hasTabbar: boolean,
    activeTab: string
}
export const useAppStore = defineStore('app', {
    state: (): AppStore => ({
        hasTabbar: false,
        activeTab: 'found'
    }),
    actions: {
        updateShowTab(params: boolean) {
            this.hasTabbar = params
        },
        updateItems(key: string, val: any) {
            this[key] = val
        }
    }
})