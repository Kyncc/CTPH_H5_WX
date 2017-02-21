import Vue from 'vue'
import axios from 'config/http'
import * as types from './mutationTypes'

/**获取订单详情 */
export const getOrderDetail = ({ rootstate,commit},data) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: '/api/h5/orders/detail',
      data:{
        order_id:rootState.route.params.id
      }
    })
    .then((response) => {
      commit(types.ORDER_DETAIL,response.data.data) 
      resolve(response)
    })
  })
}

/**获取订单列表 */
export const getOrderList = ({ state,rootstate,commit},data) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: '/api/h5/orders/list',
      data:{
        "limit":rootState.route.params.id,
        "page":state.list.page,
      }
    })
    .then((response) => {
      commit(types.ORDER_LIST,response.data.data) 
      resolve(response)
    })
  })
}