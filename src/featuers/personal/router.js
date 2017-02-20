const R_PERSONAL = r => require.ensure([], () => r(require('./pages/index')), '/personal/')
const R_PERSONAL_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/personal')
const R_PERSONAL_CART = r => require.ensure([], () => r(require('./pages/cart')), '/personal/cart/')
const R_PERSONAL_OFFILINE = r => require.ensure([], () => r(require('./pages/offiline')), '/personal/offiline/')

import modules from './modules/store'
import store from 'src/store'

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
      path: 'cart/',
      component: R_PERSONAL_CART
    },
    {
      path: 'offiline/',
      component: R_PERSONAL_OFFILINE
    }
  ]
}

store.registerModule('personal', {
  ...modules
})
