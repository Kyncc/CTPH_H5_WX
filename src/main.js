import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
//载入路由
import router from './router'

Vue.use(VueRouter)

FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
