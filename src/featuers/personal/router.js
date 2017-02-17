const R_PERSONAL = r => require.ensure([], () => r(require('./pages/index')), '/personal/')
const R_PERSONAL_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/personal')
const R_ADDRESS = r => require.ensure([], () => r(require('./pages/address/list')), '/personal/')
const R_ADDRESS_ADD = r => require.ensure([], () => r(require('./pages/address/add')), '/personal/')
const R_ADDRESS_EDIT = r => require.ensure([], () => r(require('./pages/address/edit')), '/personal/')
const R_ADDRESS_AMAP = r => require.ensure([], () => r(require('./pages/address/amap')), '/personal/')

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
      path: 'address_list',
      component: R_ADDRESS
    },
    {
      path: 'address_add',
      component: R_ADDRESS_ADD
    },
    {
      path: 'address_edit',
      component: R_ADDRESS_EDIT
    },
    {
      path: 'amap',
      component: R_ADDRESS_AMAP
    }
  ]
}
