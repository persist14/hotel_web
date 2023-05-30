/*
 * @Description: 
 * @Author: 
 * @Date: 2023-05-29 17:20:57
 * @LastEditTime: 2023-05-30 11:08:56
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 以下不在需要手动添加路由
const pageList = import.meta.glob(['@/view/**/**/*'])
console.log(pageList);

const routes: RouteRecordRaw[] = []
// 正则匹配路由名称
const regexExec: RegExp = /\/[^/\s]+(?=\/index.vue)/
const detailExec: RegExp = /\/[^/\s]+(?=\/detail)/
// 循环对路由做处理
for (let path in pageList) {
    // 是否是详情的地址 详情地址需要将地址改为动态路由
    const isDetail: boolean = path.includes('detail')
    const matchs: string[] = path.match(isDetail ? detailExec : regexExec) || ['']
    let routerPath: string
    if (isDetail) {
        routerPath = `${matchs && matchs[0]}/:id`
    } else {
        routerPath = matchs && matchs[0] || ''
    }
    // 添加路由
    routes.push({
        path: routerPath,
        name: routerPath,
        component: pageList[path]
    })
}
console.log(routes);

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 处理重定向路由和找不到页面的路由
router.addRoute({ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/view/notPage/index.vue') })

export default router