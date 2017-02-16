const R_PERSONAL_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/record')
const R_PERSONAL = r => require.ensure([], () => r(require('./pages/index')), '/personal/')
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
      path: 'address',
      component: R_ADDRESS
    }
  ]
}
