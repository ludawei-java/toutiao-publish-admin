import Vue from 'vue'
import VueRouter from 'vue-router'
// 如果是index的文件可以省略不写
import Login from '@/views/login'
import Home from '@/views/home'
import Layout from '@/views/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // 当有默认子路由的时候，父路由不起名字否则会有警告，并且只能有一个默认的子路由
    // name: 'layout',
    component: Layout,
    children: [
      // 配置主页面的路由
      {
        path: '', // 为空会作为默认子路由处理
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
