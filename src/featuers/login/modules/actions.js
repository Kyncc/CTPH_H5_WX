import Vue from 'vue'
import axios from 'config/http'
import * as types from './mutationTypes'
import router from '../../../router'

/**发送短信 */
export const getRegisterCode = ({ commit },data) => {
  return new Promise((resolve, reject)=> {
    axios({
      method:'post',
      url: '/noa/send_code',
      data:{
        ...data
      }
    })
    .then((res) => {
      Vue.$vux.toast.show({text: '发送成功！',type:'success'})
      resolve(res)
    })
  })
}

/**验证短信状态 */
export const getRegisterCodeResult = ({commit },data) => {
  return new Promise((resolve, reject)=> {
    axios({
      method:'post',
      url: '/noa/judge_code',
      data:{
        ...data
      }
    })
    .then((response) => {
      if(response.data.code == 20000){
        //1是未完善 0是已完善
        if(response.data.data.is_load_first == 1){
          router.replace('/login/info/')
        }else{
          router.replace('/')
        }
      }else{
        Vue.$vux.toast.show({
          text: response.message,
          type:'warn',
          time:1200
        })
      }
      resolve(response)
    })
  })
}

/**完善信息 */
export const setUserInfo = ({ state,commit,rootState },data) => {
  return new Promise((resolve, reject)=> {
    axios({
      method:'put',
      url: 'api/user',
      data:{
        "user":{
           "address_detail":rootState.userinfo.address_detail,
           "cn_name":data.cn_name,
           "latitude":rootState.userinfo.latitude,
           "longitude":rootState.userinfo.longitude,
           "user_phone":data.user_phone
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




