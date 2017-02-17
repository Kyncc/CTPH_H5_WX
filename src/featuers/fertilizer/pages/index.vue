<template>
  <div class="fertilizerIndex">
    <div class="con1">
      <img src="../../../assets/images/fertilizer/bg.jpg" />
    </div>
    <div class="footer">
        <flexbox :gutter="0">
          <flexbox-item style="box-sizing:border-box;padding:.25rem;" :span="6"><x-button type="primary" plain @click.native="_intoJiFei(1)">我要追肥</x-button></flexbox-item>
          <flexbox-item style="box-sizing:border-box;padding:.25rem;" :span="6"><x-button type="primary" plain @click.native="_intoJiFei(2)">我要基肥</x-button></flexbox-item>
        </flexbox>
    </div>
  </div>
</template>

<script>
import {XButton,Flexbox,FlexboxItem} from 'vux'

export default {
  components: {
    XButton,Flexbox,FlexboxItem
  },
  data () {
    return {


    }
  },
  methods: {
    _intoJiFei(type){
      this.$router.push(`info?type=${type}`);
    }
  }
}
</script>

<style lang="less" scoped>
.weui_btn_primary:not(.weui_btn_disabled):active{
  background-color:@theme-color !important;
  border-color:@theme-color;
  color:#fff;
}

</style>
