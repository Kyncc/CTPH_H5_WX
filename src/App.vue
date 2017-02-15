<template>
  <div style="height:100%;">
    <view-box ref="viewBox">
      <router-view></router-view>
    </view-box>
  </div>
</template>

<script>
import {ViewBox} from 'vux'

export default {
  components: {
    ViewBox
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import 'assets/fonts/iconfont.css';

html, body {
  height: 100%;
  width: 100%;
  background-color: #fbf9fe;
  overflow-x: hidden;
}
</style>
