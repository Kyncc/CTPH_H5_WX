import Router from 'vue-router'
//入口
import index from './router/index/router'
//路由开始
import login from './featuers/login/router'
import fertilizer from './featuers/fertilizer/router'
import record from './featuers/record/router'
import personal  from './featuers/personal/router' 
import order  from './featuers/order/router' 

let router = new Router({
  mode: 'hash',
  routes: [
    index,
    login,
    fertilizer,
    record,
    personal,
    order
  ]
});

export default router = router