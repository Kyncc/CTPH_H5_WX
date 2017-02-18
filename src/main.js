import Vue from 'vue'
import FastClick from 'fastclick'
import 'babel-polyfill'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import store from './store'
import {ToastPlugin,LoadingPlugin} from 'vux'
import AMap from 'vue-amap';

Vue.use(VueRouter)      //使用路由
Vue.use(ToastPlugin)    //使用提醒
Vue.use(LoadingPlugin)  //使用Loading
Vue.use(AMap)           //高德地图的使用
AMap.initAMapApiLoader({
  key: 'f01650aa86f4858fa6d5e0b0a850cfa0',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

//路由和store同步
sync(store, router)
FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
