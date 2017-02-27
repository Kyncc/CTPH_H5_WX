const R_INDEX = r => require.ensure([], () => r(require('./pages/index')), '/')

import store from '../../store'
export default [
  {
    path: '/', 
    component:R_INDEX,
    children: [
      {
        path: 'index/',
        redirect:'/'
      }
    ]
  },
  {
    //将OPENID注入session
    path: '/home/:id/:redirectUrl/', redirect: to => {
      store.dispatch({
        type: 'setSession',
        amount: to.params.id
      })
      return `/${to.params.redirectUrl}/`
    }
  }
]
