import Vue from 'vue'
import axios from 'config/http'
import * as types from './mutationTypes'

/**发送短信 */
export const getRegisterCode = ({ commit },data) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'get',
      url: 'noa/send_code',
      data:{
        phone:data.phone
      }
    })
    .then((response) => {
      resolve(response)
    })
  })
}

/**验证短信状态 */
export const getRegisterCodeResult = ({commit },data) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'post',
      url: 'noa/judge_code',
      data:{
        phone:data.phone,
        code:data.code
      }
    })
    .then((response) => {
      commit(types.REGISTER_CODE,data.phone) 
      resolve(response)
    })
  })
}

/**完善信息 */
export const setUserInfo = ({ state,commit },data) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'put',
      url: 'api/user',
      data:{
        "user":{
           "address_detail":state.address_detail,
           "cn_name":data.cn_name,
           "latitude":state.latitude,
           "longitude":state.longitude,
           "user_id":'',
           "user_phone":state.phone
        }
      }
    })
    .then((response) => {
      resolve(response)
    })
  })
}

/**设置位置 */
export const setUserLocation = ({commit },data) => {
  commit(types.USER_LOCATION,data)
}

/**设置地址 */
export const setUserAdress = ({commit },data) => {
  commit(types.USER_ADRESS,data)
}




