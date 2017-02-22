const R_USER_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/userinfo')
const R_ADDRESS = r => require.ensure([], () => r(require('./pages/address/list')), '/userinfo/')
const R_ADDRESS_ADD = r => require.ensure([], () => r(require('./pages/address/add')), '/userinfo/')
const R_ADDRESS_EDIT = r => require.ensure([], () => r(require('./pages/address/edit')), '/userinfo/')
const R_ADDRESS_AMAP = r => require.ensure([], () => r(require('./pages/address/amap')), '/userinfo/')
import modules from './modules/store'
import store from 'src/store'
export default  {
  path: '/userinfo',
  redirect:'/userinfo/',
  component:R_USER_LAYOUT,
  children: [
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

store.registerModule('userinfo', {
  ...modules
});
