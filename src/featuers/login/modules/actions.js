import Vue from 'vue'
import axios from 'config/http'
import * as types from './mutationTypes'

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
export const getRegisterCodeResult = ({rootState,commit },data) => {
  return new Promise((resolve, reject)=> {
    axios({
      method:'post',
      url: '/noa/judge_code',
      data:{
        ...data
      },
      params:{
        "SESSION":rootState.common.session,
      }
    })
    .then((response) => {
      if(response.code == 20000){
        //1是未完善 0是已完善
        if(response.data.is_load_first == 1){
          Vue.$vux.toast.show({
            text: '登录成功，即将跳转到完善信息页面！',
            time:800
          });
          this.$router.replace('/login/info/')
        }else{
          Vue.$vux.toast.show({
            text: '登录成功，即将跳转到首页！',
            time:800
          });
          this.$router.replace('/')
        }
      }else{
        Vue.$vux.toast.show({
          text: response.message,
          type:'warn',
          time:1200
        })
      }
      // commit(types.REGISTER_CODE,data.phone)
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




