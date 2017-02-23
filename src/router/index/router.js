const R_INDEX = r => require.ensure([], () => r(require('./pages/index')), '/')

import store from '../../store'
export default [
  {
    'path': '/', 
    'component':R_INDEX
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
  },
  {
    //将OPENID注入session
    path: '/home/:id/', redirect: to => {
      store.dispatch({
        type: 'setSession',
        amount: to.params.id
      })
      return '/'
    }
  }
]
