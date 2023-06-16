/*
 * @Description: 
 * @Author: 
 * @Date: 2023-05-31 13:44:59
 * @LastEditTime: 2023-06-16 14:32:18
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import { defineStore } from 'pinia'
type AppStore = {
    hasTabbar: boolean,
    activeTab: string,
    posiInfo?: {
        latitude?: number,
        longitude?: number
    }
}
export const useAppStore = defineStore('app', {
    state: (): AppStore => ({
        hasTabbar: false,
        activeTab: 'found',
        posiInfo: {}
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