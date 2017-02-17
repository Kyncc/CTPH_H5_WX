import Vue from 'vue'
import axios from 'config/http'
import * as types from './mutationTypes'

/**获取配肥站列表 */
export const getFertilizerShop = ({ rootState,commit },params) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: 'noa/shop'
    })
    .then((response) => {
      commit(types.FERTILIZER_SHOP,response.data.data)
      resolve(response)
    })
  })
}

/**获取申请状态 */
export const getFertilizerApply = ({ rootState,commit }) => {
  Vue.$vux.loading.show({text: '加载中'})
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: 'api/soil_test/apply_status',
      params:{
        "SESSION":'bec4eae1-4501-4093-98b6-04a69fdaefec'
      }
    })
    .then((response) => {
      Vue.$vux.loading.hide()
      commit(types.FERTILIZER_APPLY_STATUS,response.data.data)
      resolve(response)
    })
    .catch((error)=>{
       Vue.$vux.toast.show({text: '接口异常'})
       Vue.$vux.loading.hide()
    })
  })
}

/**等待申请信息 */
export const getFertilizerApplyInfo = ({ rootState,commit },params) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: 'api/soil_test/last_apply'
    })
    .then((response) => {
      commit(types.FERTILIZER_APPLY_INFO,response.data)
      resolve(response)
    })
  })
}

/**提交测土信息 */
export const postFertilizerApply = ({ rootState,commit },data) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'post',
      url: 'api/soil_test/apply',
      data:{
        "apply_type":rootState.route.query.type,
        "crop_id":data.crop_id,
        "crop_type":data.crop_type,
        "last_yeid":data.last_yeid,
        "shop_id":data.shop_id
      }
    })
    .then((response) => {
      commit(types.FERTILIZER_APPLY_FINISH)
      resolve(response)
    })
  })
}