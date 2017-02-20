import Vue from 'vue'
import axios from 'config/http'

const state = {
  shop:[],    //配肥站
  system:(/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ? 'IOS' : 'Android')
}

const actions = {
  /**获得配肥站列表 */
  getShop:({ rootState,commit }) => {
    return new Promise((resolve, reject)=> { 
      axios({
        method:'get',
        url: 'noa/shop'
      })
      .then((response) => {
        commit('SHOPLIST',response.data.data)
        resolve(response)
      })
    })
  }
} 

const getters = {
  Path:(state,getters,rootState) => {
    return rootState.route.path
  },
  Query:(state,getters,rootState) => {
    return rootState.route.query
  },
  Params:(state,getters,rootState) => {
    return rootState.route.params
  },
  Shop:(state,getters,rootState) => {
    return state.shop
  },
  System:(state,getters,rootState) => {
    return rootState.tools.system
  }
}

const mutations = {
  'SHOPLIST'(state, data) {
    state.shop = data
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}