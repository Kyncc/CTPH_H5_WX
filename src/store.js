import Vue from 'vue'
import Vuex from 'vuex'
import common from 'src/featuers/common/store'

Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    common
  }
})
