// const R_ORDER = r => require.ensure([], () => r(require('./pages/index')), '/order/')
const R_ORDER_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/order')
const R_ORDER_LIST = r => require.ensure([], () => r(require('./pages/list')), '/order/list/')
const R_ORDER_DETAIL = r => require.ensure([], () => r(require('./pages/detail')), '/order/detail/')
const R_ORDER_FINISH = r => require.ensure([], () => r(require('./pages/finish')), '/order/finish/')


export default  {
  path: '/order', 
  component:R_ORDER_LAYOUT,
  redirect:'/order/list/',
  children: [
    {
      path: 'list/',
      component: R_ORDER_LIST
    },
    {
      path: 'detail/',
      component: R_ORDER_DETAIL
    },
    {
      path: 'finish/',
      component: R_ORDER_FINISH
    }
  ]
}