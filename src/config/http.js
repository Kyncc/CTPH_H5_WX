import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://192.168.5.14:8081/';
// axios.defaults.baseURL = 'http://192.168.1.129:8383';

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data,{arrayFormat:'brackets'});
  }
  return config
},(error) =>{
  Vue.$vux.toast.show({text: '错误的传参',type:'text'})
  return Promise.reject(error)
});

//code状态码200判断
axios.interceptors.response.use((res) =>{
  if(res.data.code != '20000'){
    Vue.$vux.toast.show({text:res.data.message,type:'text'})
    return Promise.reject(res)
  }
  return res;
}, (error) => {
   Vue.$vux.toast.show({text:'网络异常',type:'text'})
   return Promise.reject(error)
});

export default axios;