import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  shop:[],
  apply:{
    isReset:false,      //标志位刷新数据
    add_apply_status:'',
    add_shop_name:'',
    base_apply_status:'',
    base_shop_name:'',
    info:[]
  }
}

const mutations = {
  [types.FERTILIZER_SHOP](state , data){
    state.shop = data
  },
  [types.FERTILIZER_APPLY_STATUS](state , data){
    state.isReset = false
    state.apply.add_apply_status = data.add_apply_status
    state.apply.add_shop_name = data.add_shop_name
    state.apply.base_apply_status = data.base_apply_status
    state.apply.base_shop_name = data.base_shop_name
  },
  [types.FERTILIZER_APPLY_INFO](state , data){
    state.apply.info = data
  },
  [types.FERTILIZER_APPLY_FINISH](state){
    state.isReset = true
    state.add_apply_status = ''
    state.add_shop_name = ''
    state.base_apply_status = ''
    state.base_shop_name = ''
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}