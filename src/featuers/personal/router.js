const R_PERSONAL = r => require.ensure([], () => r(require('./pages/index')), '/personal/')
const R_PERSONAL_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/personal')
const R_PERSONAL_ORDER = r => require.ensure([], () => r(require('./pages/order')), '/personal/order')
const R_ADDRESS = r => require.ensure([], () => r(require('./pages/address/list')), '/personal/')

export default  {
  path: '/personal',
  redirect:'/personal/',
  component:R_PERSONAL_LAYOUT,
  children: [
    {
      path: '/',
      component: R_PERSONAL
    },
     {
      path: 'order',
      component: R_PERSONAL_ORDER
     },
    {
      path: 'address',
      component: R_ADDRESS
    }
  ]
}
