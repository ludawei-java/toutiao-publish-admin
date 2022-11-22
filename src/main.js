import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入全局css样式
import './styles/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
// 全局注册ElementUI
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
