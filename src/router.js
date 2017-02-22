import Router from 'vue-router'
import store from './store'
//入口
import index from './router/index/router'
//路由开始
import login from './featuers/login/router'
import fertilizer from './featuers/fertilizer/router'
import record from './featuers/record/router'
import personal  from './featuers/personal/router'
import order  from './featuers/order/router'
import user  from './featuers/user/router'

let router = new Router({
  mode: 'hash',
  routes: [
    ...index,
    login,
    fertilizer,
    record,
    personal,
    order,
    user
  ]
})

router.beforeEach((to, from, next) => {
  //是否有OPENID若没有则跳到授权
  if(store.state.common.session){
    next();
  }else{
    window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf565864b6a1a358d&redirect_uri=http%3a%2f%2fpeifei.qmant.com%2fnoa%2ftoken%3fpage%3dhttp%3a%2f%2fwww.qmant.com&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"
  }
})


export default router = router
