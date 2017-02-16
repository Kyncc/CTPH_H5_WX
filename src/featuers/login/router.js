const R_LOGIN_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/login')
const R_LOGIN = r => require.ensure([], () => r(require('./pages/login')), '/login/')
const R_LOGIN_INFO = r => require.ensure([], () => r(require('./pages/info')), '/login/info')

export default  {
  path: '/login', 
  component:R_LOGIN_LAYOUT,
  redirect:'/login/',
  children: [
    {
      path: '/',
      component: R_LOGIN
    },
     {
      path: 'info',
      component: R_LOGIN_INFO
    }
  ]
}
