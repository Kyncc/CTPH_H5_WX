import Vue from 'vue'
import FastClick from 'fastclick'
import 'babel-polyfill'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from './store'
import {ToastPlugin,LoadingPlugin} from 'vux'

Vue.use(VueRouter)      //使用路由
Vue.use(ToastPlugin)    //使用提醒
Vue.use(LoadingPlugin)  //使用Loading

//路由和store同步
sync(store, router)

FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
