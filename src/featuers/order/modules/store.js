import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  finish:{},
  detail:{},
  list:{
    page:0,
    num:10,
    data:[{}]
  }
}

const mutations = {
  [types.ORDER_FINISH](state,data){
    this.finish = data
  },
  [types.ORDER_DETAIL](state,data){
    this.detail = data
  },
  [types.ORDER_LIST](state,data){
    this.list.data = data
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}