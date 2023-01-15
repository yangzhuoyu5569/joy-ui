import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, getMenuList } from '@/utils/auth' // get token from cookie
// import store from "@/store";
import Layout from '@/layout'


// 权限存储
function getRights() {
    let menuList = getMenuList()
    routesData(menuList)
}

// 动态添加路由
function routesData(data) {
    // 重新加载一次 VueRouter
    router.reloadRouter()
    data.forEach(item => {
        item.children.forEach(i => {
            // 组装路由配置
            const temp = {
                name: i.name,
                path: i.url,
                component: Layout,
                meta: { title: i.title, icon: i.icon, affix: true }
            }
            // 动态添加为 index 的子路由
            router.addRoute("index", temp)
        })
    })
}


router.beforeEach(async(to, from, next) => {
    NProgress.start(); // 开启Progress
    const hasToken = getToken()
    if (hasToken) {
        if (to.path !== "/login") {
            // 动态路由只能添加一次
            // 退出登录后可重新添加
            getRights()
        }
        if (to.path === "/login") {
            next("/dashbord")
        }
        next()
    } else {
        if (to.path === "/login"){
            next()
        }else {
            next('/login')
        }
        NProgress.done()
    }
});


router.afterEach(() => {
    NProgress.done() // 结束Progress
});
