import Vue from 'vue'
import FastClick from 'fastclick'
import 'babel-polyfill'
// import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import {ToastPlugin } from 'vux'

Vue.use(VueRouter)
Vue.use(ToastPlugin)

FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
