const R_INDEX = r => require.ensure([], () => r(require('./pages/index')), '/')

export default  {
  path: '/', 
  component:R_INDEX
}
