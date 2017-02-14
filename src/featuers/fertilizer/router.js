const R_FERTILIZER = r => require.ensure([], () => r(require('./pages/index')), '/fertilizer/')
const R_FERTILIZER_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/fertilizer')
const R_FERTILIZER_ORDER = r => require.ensure([], () => r(require('./pages/order')), '/fertilizer/order')
const R_FERTILIZER_DETAIL = r => require.ensure([], () => r(require('./pages/detail')), '/fertilizer/detail')

export default  {
  path: '/fertilizer', 
  component:R_FERTILIZER_LAYOUT,
  redirect:'/fertilizer/',
  children: [
    {
      path: '/',
      component: R_FERTILIZER
    },
    {
      path: 'order',
      component: R_FERTILIZER_ORDER
    },
    {
      path: 'detail',
      component: R_FERTILIZER_DETAIL
    }
  ]
}
