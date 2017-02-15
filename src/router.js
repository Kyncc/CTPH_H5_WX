import Router from 'vue-router'
//路由开始
import login from './featuers/login/router'
import fertilizer from './featuers/fertilizer/router'
import record from './featuers/record/router'
import personal  from './featuers/personal/router' 
import order  from './featuers/order/router' 
// import home from './home/router'

let router = new Router({
  mode: 'hash',
  routes: [
    login,
    fertilizer,
    record,
    personal,
    order
  ]
});

export default router = router