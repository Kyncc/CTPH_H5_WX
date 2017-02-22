const R_ORDER_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/order')
const R_ORDER_LIST = r => require.ensure([], () => r(require('./pages/list')), '/order/list/')
const R_ORDER_DETAIL = r => require.ensure([], () => r(require('./pages/detail')), '/order/detail/')
const R_ORDER_OFFILINE = r => require.ensure([], () => r(require('./pages/offiline')), '/order/offiline/')

import modules from './modules/store'
import store from 'src/store'
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
      path: 'detail/:id',
      component: R_ORDER_DETAIL
    },
    {
      path: 'offiline/',
      component: R_ORDER_OFFILINE
    }
  ]
}

store.registerModule('order', {
  ...modules
});
