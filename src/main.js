import Vue from 'vue'
import FastClick from 'fastclick'
import 'babel-polyfill'
// import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import {ToastPlugin } from 'vux';
import AMap from 'vue-amap';

Vue.use(VueRouter)
Vue.use(ToastPlugin)
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'f01650aa86f4858fa6d5e0b0a850cfa0',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

FastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
