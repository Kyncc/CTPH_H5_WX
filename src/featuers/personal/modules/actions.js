import axios from 'config/http'
import * as types from './mutationTypes'

/**获取订制肥价格 */
export const getShopPrice = ({ commit},params) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: 'noa/fertilizer',
      params:{
        "shop_id":params.shop_id
      }
    })
    .then((response) => {
      commit(types.PERSONAL_SHOP_INFO,response.data.data)
      resolve(response)
    })
  })
}

/**预付接口 */
export const getPrePay = ({ commit,state},params) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'post',
      url: 'api/h5/orders/prepay',
      params:{
        "order_id	":state.waitOrderId
      }
    })
    .then((response) => {
      commit(types.PERSONAL_SHOP_INFO,response.data.data)
      resolve(response)
    })
  })
}

/**下单 */
export const postPersonalOrder = ({ commit,state},params) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'post',
      url: 'api/h5/orders/add_custom_made_fertilizer',
      data:{
        ...state.order
      }
    })
    .then((response) => {
      commit(types.PERSONAL_WAIT_ORDERID,response.data.data.order_id)
      resolve(response)
    })
  })
}


/**清空订单信息订单信息 */
export const clearPersonal = ({commit}) => {
  commit(types.PERSONAL_CLEAR)
}

/**完善订单信息 */
export const setPersonalGoodsDetail = ({ commit },data) => {
  commit(types.PERSONAL_ORDER_GOODSINFO,data)
}

/**完善个人收货信息 */
export const setPersonalInfoDetail = ({ commit },data) => {
  commit(types.PERSONAL_ORDER_USERINFO,data)
}


