const R_RECORD_LAYOUT = r => require.ensure([], () => r(require('./pages/index')), '/record')

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
      path: 'detail',
      component: R_RECORD_DETAIL
    }
  ]
}
