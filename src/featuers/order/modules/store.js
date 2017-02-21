import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  finish:{},
  detail:{},
  prepay:{},
  list:{
    page:1,
    limit:10,
    data:[{}]
  }
}

const mutations = {
  [types.ORDER_FINISH](state,data){
    state.finish = data
  },
  [types.ORDER_DETAIL](state,data){
    state.detail = data
  },
  [types.ORDER_LIST](state,data){
    state.list.data = data.order_list
    state.list.page ++
  },
  [types.ORDER_PREPAY](state,data){
    state.list.prepay = data
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}