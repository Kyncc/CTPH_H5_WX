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


/**获取预支付 */
export const getOrderPrePay = ({ state,rootState,commit},data) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: '/api/h5/orders/prepay',
      data:{
        "order_id":rootState.route.params.id,
      }
    })
    .then((response) => {
      commit(types.ORDER_PREPAY,response.data.data) 
      resolve(response)
    })
  })
}

/**获取订单列表 */
export const getOrderList = ({ state,rootState,commit},data) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: '/api/h5/orders/list',
      params:{
        "limit":state.list.limit,
        "page":state.list.page,
        "SESSION":rootState.common.session
      }
    })
    .then((response) => {
      commit(types.ORDER_LIST,response.data.data) 
      resolve(response)
    })
  })
}