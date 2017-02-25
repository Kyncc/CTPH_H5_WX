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
/**设置要修改的地址ID */
export const setAddressId = ({commit },data) => {
  commit(types.EDIT_ADDRESS_ID,data)
}
/**设置当前选中的地址ID */
export const setSelectedAddressId = ({commit },data) => {
  commit(types.SELECTED_ADDRESS_ID,data)
}

//添加地址
export const addUserAddressData = ({ commit },data) => {
  Vue.$vux.loading.show({text: '请稍候'})
  return new Promise((resolve, reject)=> {
    axios({
      method:'post',
      url: '/api/address',
      data:{
        ...data
      }
    })
    .then((response) => {
      Vue.$vux.loading.hide()
      if(response.data.code != 20000){
        this.$vux.toast.show({
          type:'warn',
          text: response.data.message
        })
        return;
      }
      commit(types.ADD_USER_ADDRESS)
      Vue.$vux.toast.show({
        text: '新增地址成功',
        time:1000
      })
      resolve(response)
    })
    .catch((error)=>{
      Vue.$vux.toast.show({text:error.data.message,type:"text"})
      Vue.$vux.loading.hide()
      reject(error)
    })
  })
}

//获取地址列表
export const getUserAddressListData = ({commit}) => {
  return new Promise((resolve, reject)=> {
    axios({
      method:'get',
      url: '/api/address'
    })
    .then((response) => {
      commit(types.GET_USER_ADDRESS_LIST,response.data.data)
      resolve(response)
    })
    .catch((error)=>{
      Vue.$vux.toast.show({text: '提交失败,请重试'})
      reject(error)
    })
  })
}




//设为默认地址
export const setCurrentAddress = ({commit},data) => {
  Vue.$vux.loading.show({text: '设为默认地址中'})
  return new Promise((resolve, reject)=> {
    axios({
      method:'put',
      url: '/api/address/defaultaddress',
      data:{
        ...data
      }
    })
    .then((response) => {
      Vue.$vux.loading.hide()
      resolve(response)
    })
    .catch((error)=>{
      Vue.$vux.toast.show({text: '设为默认地址失败'})
      Vue.$vux.loading.hide()
      reject(error)
    })
  })
}

//删除地址
export const deleteAddress = ({commit,rootState},data) => {
  Vue.$vux.loading.show({text: '删除地址中'})
  return new Promise((resolve, reject)=> {
    axios({
      method:'delete',
      url: '/api/address',
      data:{
        ...data
      },
      params:{
        "SESSION":rootState.common.session,
      }
    })
    .then((response) => {
      Vue.$vux.loading.hide()
      resolve(response)
    })
    .catch((error)=>{
      Vue.$vux.toast.show({text: '删除地址失败'})
      Vue.$vux.loading.hide()
      reject(error)
    })
  })
}

//修改地址
export const editAddress = ({ rootState,commit },data) => {
  Vue.$vux.loading.show({text: '请稍候'})
  return new Promise((resolve, reject)=> {
    axios({
      method:'put',
      url: '/api/address',
      data:{
        ...data
      },
      params:{
        "SESSION":rootState.common.session,
      }
    })
    .then((response) => {
      Vue.$vux.loading.hide()
      resolve(response)
    })
    .catch((error)=>{
      Vue.$vux.toast.show({text: '修改失败,请重试'})
      Vue.$vux.loading.hide()
      reject(error)
    })
  })
}