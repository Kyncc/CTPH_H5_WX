const R_PERSONAL = r => require.ensure([], () => r(require('./pages/index')), '/personal/')

export default  {
  path: '/personal', 
  component:R_PERSONAL
}
