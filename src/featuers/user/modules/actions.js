/**
 * Created by pans0911 on 2017/2/20.
 */
import Vue from 'vue'
import axios from 'config/http'
import * as types from './mutationTypes'

/**设置位置 */
export const setUserLnglat = ({commit },data) => {
  commit(types.INFO_USER_LOCATION,data)
}

/**设置地址 */
export const setUserAddress = ({commit },data) => {
  commit(types.INFO_USER_ADDRESS,data)
}

/**设置姓名 */
export const setUserName = ({commit },data) => {
  commit(types.INFO_USER_NAME,data)
}

/**设置电话 */
export const setUserPhone = ({commit },data) => {
  commit(types.INFO_USER_PHONE,data)
}
//添加地址
export const addUserAddressData = ({ rootState,commit },data) => {
  Vue.$vux.loading.show({text: '请稍候'})
  return new Promise((resolve, reject)=> {
    axios({
      method:'post',
      url: '/api/address',
      data:{
        ...data
      },
      params:{
        "SESSION":'d5007d19-664c-4e16-a174-8be2d0fe751e',
      }
    })
      .then((response) => {
        Vue.$vux.loading.hide()
        commit(types.ADD_USER_ADDRESS)
        resolve(response)
      })
      .catch((error)=>{
        Vue.$vux.toast.show({text: '提交失败,请重试'})
        Vue.$vux.loading.hide()
        reject(error)
      })
  })
}
//获取地址列表
export const getUserAddressListData = ({commit}) => {
  Vue.$vux.loading.show({text: '请稍候'})
  return new Promise((resolve, reject)=> {
    axios({
      method:'get',
      url: '/api/address',
      params:{
        "SESSION":'9368d6cb-ec92-48e6-9faa-67a5bda84ff0',
      }
    })
      .then((response) => {
        Vue.$vux.loading.hide()
        commit(types.GET_USER_ADDRESS_LIST,response.data.data)
        resolve(response)
      })
      .catch((error)=>{
        Vue.$vux.toast.show({text: '提交失败,请重试'})
        Vue.$vux.loading.hide()
        reject(error)
      })
  })
}




