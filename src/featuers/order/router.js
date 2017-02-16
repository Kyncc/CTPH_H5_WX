const R_ORDER_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/order')
const R_ORDER = r => require.ensure([], () => r(require('./pages/index')), '/order/')
const R_ORDER_DETAIL = r => require.ensure([], () => r(require('./pages/detail')), '/order/detail')

export default  {
  path: '/order', 
  component:R_ORDER_LAYOUT,
  redirect:'/order/',
  children: [
    {
      path: '/',
      component: R_ORDER
    },
    {
      path: 'detail',
      component: R_ORDER_DETAIL
    }
  ]
}