const R_RECORD_LAYOUT = r => require.ensure([], () => r(require('./pages/layout')), '/record')
const R_RECORD = r => require.ensure([], () => r(require('./pages/index')), '/record/')
const R_RECORD_HISTORY = r => require.ensure([], () => r(require('./pages/history')), '/record/history')
const R_RECORD_DETAIL = r => require.ensure([], () => r(require('./pages/detail')), '/record/detail')


export default  {
  path: '/record', 
  component:R_RECORD_LAYOUT,
  redirect:'/record/',
  children: [
    {
      path: '/',
      component: R_RECORD
    },
    {
      path: 'history',
      component: R_RECORD_HISTORY
    },
     {
      path: 'detail',
      component: R_RECORD_DETAIL
    }
  ]
}
