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
    data:[]
  }
}

const mutations = {
  [types.ORDER_FINISH](state,data){
    state.finish = data
  },
  [types.ORDER_DETAIL](state,data){
    state.detail = data
  },
  [types.ORDER_DETAIL_CLEAR](state,data){
    state.detail = []
  },
  [types.ORDER_LIST](state,data){
    if(data.order_list.length == 0){return;}
    state.list.data = state.list.data.concat(data.order_list)
    state.list.page ++
  },
  [types.ORDER_LIST_RESET](state,data){
    state.list.data = []
    state.list.page = 1
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