import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import store from 'src/store'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL =  (process.env.NODE_ENV == 'development' ? 'http://192.168.5.14:8080/' :  'http://peifei.qmant.com/')

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post' || config.method  === 'put' ){
    config.data = qs.parse(config.data,{arrayFormat:'brackets'});
  }
  return config
},(error) =>{
  Vue.$vux.toast.show({text: '错误的传参',type:'text'})
  return Promise.reject(error)
})

//code状态码200判断
axios.interceptors.response.use((res) =>{
  if(res.data.code != '20000'){
    Vue.$vux.toast.show({text:res.data.message,type:'text'})
    return Promise.reject(res)
  }
  return res;
}, (error) => {
  if(error.response){
    switch (error.response.status){
      case 401:
        window.location.href = `http://${window.document.location.host}/?#/login/`
        break
      default:
        Vue.$vux.toast.show({text:'网络异常',type:'text'})
    }
  }
   return Promise.reject(error)
})

export default axios;
