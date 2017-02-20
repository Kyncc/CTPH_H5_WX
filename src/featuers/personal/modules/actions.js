import axios from 'config/http'
import * as types from './mutationTypes'

/**或者订制肥规格 */
export const getShopPrice = ({ commit,state,rootstate},params) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: 'noa/fertilizer',
      params:{
        shop_id:params.shop_id
      }
    })
    .then((response) => {
      commit(types.PERSONAL_SHOP_INFO,response.data.data)
      resolve(response)
    })
  })
}

/**清空订单信息订单信息 */
export const clearPersonal = ({commit }) => {
  commit(types.PERSONAL_CLEAR)
}

/**完善订单信息 */
export const setPersonalGoodsDetail = ({ state,commit },data) => {
  commit(types.PERSONAL_ORDER_GOODSINFO,response.data.data)
}

/**完善个人收货信息 */
export const setPersonalInfoDetail = ({ state,commit },data) => {
  commit(types.PERSONAL_ORDER_GOODSINFO,response.data.data)
}


