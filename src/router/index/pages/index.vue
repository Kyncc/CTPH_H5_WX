<template>
  <div class="enter">
    <div class="con1">
      <img src="../../../assets/images/index/con1.jpg" />
    </div>
    <div class="con2">
      <img src="../../../assets/images/index/con2.png" />
      <router-link to="fertilizer/" class="link1"></router-link>
      <router-link to="personal/" class="link2"> </router-link>
    </div >
    <div class="con3">
      <img src="../../../assets/images/index/ewm.png" />
    </div>
    <div class="con4">
      <img src="../../../assets/images/index/foot.png" />
    </div>
  </div>
</template>

<script>
import {XButton,XHeader} from 'vux'
import './index.less'
import Wechat from 'config/wx.config'
Wechat()
export default {
  components: {
    XButton,XHeader
  },
  data () {
    return {


    }
  }
}
</script>
