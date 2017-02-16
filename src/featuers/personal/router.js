const R_PERSONAL = r => require.ensure([], () => r(require('./pages/index')), '/personal/')
const R_PERSONAL_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/personal')
const R_PERSONAL_ORDER = r => require.ensure([], () => r(require('./pages/order')), '/personal/order')

export default  {
  path: '/personal', 
  component:R_PERSONAL_LAYOUT,
  redirect:'/personal/',
  children: [
    {
      path: '/',
      component: R_PERSONAL
    },
     {
      path: 'order',
      component: R_PERSONAL_ORDER
    }
  ]
}
