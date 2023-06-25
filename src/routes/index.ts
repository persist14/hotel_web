/*
 * @Description: 
 * @Author: 
 * @Date: 2023-05-29 17:20:57
 * @LastEditTime: 2023-06-25 16:29:05
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/stores/app'

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

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 处理重定向路由和找不到页面的路由
router.addRoute({ path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/view/notPage/index.vue') })
// 路由前置守卫
// 配置需要tabbaer路由
const hideTab: string[] = ['dashboard', 'travel', 'my']
router.beforeEach((to, from, next) => {
    // 在这里pinia已经完成注册
    const store = useAppStore()
    // 根据路由修改是否展示tabbar
    const path = to.fullPath.split('/').pop() || ''
    hideTab.includes(path) ? store.updateShowTab(true) : store.updateShowTab(false)
    // 根据路由选中底部tabbar
    switch (path) {
        case 'dashboard':
            store.updateItems('activeTab', 'dashboard')
            break;
        case 'travel':
            store.updateItems('activeTab', 'travel')
            break;
        case 'my':
            store.updateItems('activeTab', 'my')
            break;
        default:
            store.updateItems('activeTab', '')
    }
    // 限制路由
    const token = localStorage.getItem('token')
    const whiteList = ['/login', '/register']

    if (!whiteList.includes(to.path)) {
        console.log(token);

        token ? next() : next({
            path: '/login'
        })
        return
    }
    next()
})
export default router