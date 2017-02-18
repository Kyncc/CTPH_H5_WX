import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  longitude:'',
  latitude:'',
  address_detail:'',
  phone:''
}

const mutations = {
  [types.USER_LOCATION](state , data){
    state.latitude = data.latitude;
    state.longitude = data.longitude;
  },
  [types.USER_ADRESS](state , data){
    state.address_detail = data
  },
  [types.REGISTER_CODE](state , data){
    state.phone = data.phone
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}