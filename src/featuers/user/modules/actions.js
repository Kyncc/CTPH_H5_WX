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
        "SESSION":'9368d6cb-ec92-48e6-9faa-67a5bda84ff0',
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
  // Vue.$vux.loading.show({text: '请稍候'})
  return new Promise((resolve, reject)=> {
    axios({
      method:'get',
      url: '/api/address',
      params:{
        "SESSION":'eb63a011-c2fc-45e3-8d41-c08df640d870',
      }
    })
      .then((response) => {
        // Vue.$vux.loading.hide()
        commit(types.GET_USER_ADDRESS_LIST,response.data.data)
        resolve(response)
      })
      .catch((error)=>{
        Vue.$vux.toast.show({text: '提交失败,请重试'})
        // Vue.$vux.loading.hide()
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
      },
      params:{
        "SESSION":'eb63a011-c2fc-45e3-8d41-c08df640d870',
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
export const deleteAddress = ({commit},data) => {
  Vue.$vux.loading.show({text: '删除地址中'})
  return new Promise((resolve, reject)=> {
    axios({
      method:'delete',
      url: '/api/address',
      data:{
        ...data
      },
      params:{
        "SESSION":'eb63a011-c2fc-45e3-8d41-c08df640d870',
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
        "SESSION":'eb63a011-c2fc-45e3-8d41-c08df640d870',
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




