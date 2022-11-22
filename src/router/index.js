import Vue from 'vue'
import VueRouter from 'vue-router'
// 如果是index的文件可以省略不写
import Login from '@/views/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
