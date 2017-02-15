<template>
<div>
  <div class="weui_cell vux-tap-active"> 
    <div class="weui_cell_bd weui_cell_primary">
      <flexbox>
        <flexbox-item :span="7"><p>配方肥(18-18-18)</p></flexbox-item>
        <flexbox-item :span="2"><p style="text-align:right;padding:0 .5rem">×1</p></flexbox-item>
        <flexbox-item :span="3"><p style="text-align:right;padding:0 .5rem">￥123</p></flexbox-item>
      </flexbox>
      <span class="vux-label-desc">40公斤/袋</span>
    </div>
  </div>
  <cell value="总计:￥123123.56"></cell>
</div>
</template>

<script>

import { Group, Cell,Flexbox,FlexboxItem } from 'vux'
export default {
  name:'orderGoodList',
  components: {
     Group,Cell,Flexbox,FlexboxItem
  },
  props: {
    goods: String,
    money: String,
    count: String,
    type: String,
  }
}
</script>

<style scoped>

</style>