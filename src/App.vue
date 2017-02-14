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

body {
  background-color: #fbf9fe;
}
</style>
