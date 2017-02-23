import Vue from 'vue'
import axios from 'config/http'
import * as types from './mutationTypes'

/**获取订单详情 */
export const getOrderDetail = ({ rootState,commit},data) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: '/api/h5/orders/detail',
      params:{
        "order_id":rootState.route.params.id,
        "SESSION":rootState.common.session
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
      method:'post',
      url: '/api/h5/orders/prepay',
      data:{
        "order_id":data.order_id,
      },
      params:{
        "SESSION":rootState.common.session
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
    .catch((error)=>{
      reject(error)
    })
  })
}

/**取消订单 */
export const getOrderCancel = ({ state,rootState,commit},data) => {
  Vue.$vux.loading.show({text: '请稍候'})
  return new Promise((resolve, reject)=> { 
    axios({
      method:'post',
      url: '/api/h5/orders/cancel',
      params:{
        "SESSION":rootState.common.session
      },
      data:{
        "cancelled_reason":"其他",
        "order_id":data.order_id
      }
    })
    .then((response) => {
      commit(types.ORDER_LIST_RESET)
      Vue.$vux.loading.hide()
      Vue.$vux.toast.show({'text': '取消成功','time':'1000','is-show-mask':true})
      resolve(response)
    })
    .catch((error)=>{
      Vue.$vux.toast.show({text: '提交失败,请重试'})
      Vue.$vux.loading.hide()
      reject(error)
    })
  })
}

/**订单列表情空 */
export const orderListClear = ({commit}) => {
   commit(types.ORDER_LIST_RESET)
}

/**订单列表高度 */
export const setOrderListScroll = ({commit},height) => {
   commit(types.ORDER_LIST_SCROLL,height)
}

/**订单详情清空 */
export const orderDetailClear = ({commit}) => {
   commit(types.ORDER_DETAIL_CLEAR)
}