/*
 * @Description: 
 * @Author: 
 * @Date: 2023-06-25 14:27:36
 * @LastEditTime: 2023-06-25 16:50:28
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import { defineStore } from "pinia";
import { login, register } from "@/apis/user";
import { UserOpts } from "@/models/login";
import { useAppStore } from "./app";
interface LoginStateOpts {
    user: {
        username?: string,
        email?: string,
        phone?: string,
        avatar?: string
    }
}
export const useLoginStore = defineStore('login', {
    state: (): LoginStateOpts => ({
        user: {}
    }),
    actions: {
        async login(data: UserOpts) {
            const app = useAppStore()
            const res = await login(data)
            const that = this
            if (res.code === 200) {
                // 修改app中的token
                app.$patch((state) => {
                    // 修改公共的state
                    state.token = res.access_token
                    localStorage.setItem('token', res.access_token)
                    // 修改自己的state
                    this.$patch(state => {
                        state.user = {
                            username: res.data.username,
                            email: res.data.email,
                            phone: res.data.phone,
                            avatar: res.data.avatar
                        }
                    })
                })
            }
            return res
        },
        async regis(data: UserOpts) {
            return await register(data)
        }
    }
})