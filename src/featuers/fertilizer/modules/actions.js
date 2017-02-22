import Vue from 'vue'
import axios from 'config/http'
import * as types from './mutationTypes'

/**获取申请状态 */
export const getFertilizerApply = ({ rootState,commit }) => {
  Vue.$vux.loading.show({text: '请稍候'})
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: 'api/soil_test/apply_status',
      params:{
        "SESSION":rootState.common.session
      }
    })
    .then((response) => {
      Vue.$vux.loading.hide()
      commit(types.FERTILIZER_APPLY_STATUS,response.data.data)
      resolve(response)
    })
    .catch((error)=>{
       Vue.$vux.loading.hide()
       reject(error)
    })
  })
}

/**等待申请信息 */
export const getFertilizerApplyInfo = ({ rootState,commit }) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: 'api/soil_test/last_apply',
      params:{
        "SESSION":rootState.common.session
      }
    })
    .then((response) => {
      commit(types.FERTILIZER_APPLY_INFO,response.data.data)
      resolve(response)
    })
    .catch((error)=>{
      reject(error)
    })
  })
}

/**提交测土信息 */
export const postFertilizerApply = ({ rootState,commit },data) => {
  Vue.$vux.loading.show({text: '请稍候'})
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
      },
      params:{
        "SESSION":rootState.common.session
      }
    })
    .then((response) => {
      Vue.$vux.loading.hide()
      commit(types.FERTILIZER_APPLY_FINISH)
      resolve(response)
    })
    .catch((error)=>{
      Vue.$vux.loading.hide()
      reject(error)
    })
  })
}