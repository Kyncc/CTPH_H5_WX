<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <router-view></router-view>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox} from 'vux'
  import store from './store'
  import 'config/common.less'

  export default {
    components: {
      ViewBox
    },
    store
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import 'assets/fonts/iconfont.css';
</style>
