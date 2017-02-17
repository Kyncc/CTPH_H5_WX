<template>
  <div class="orderDetail">
    <x-header 
      slot="header" 
      :left-options="{showBack: false,backText:'返回'}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="订单"
    ></x-header>
    <div style="padding-top:46px;">
      <group>
       <div class="weui_cell ctph-order-list-header">
          <div class="weui_cell_bd weui_cell_primary">
            <img src="http://lorempixel.com/30/30"/>
            <span>店铺名称 </span> 
          </div> 
          <div class="weui_cell_ft"> 
            <span>等待付款</span>
          </div>
       </div>
        <div class="weui_cell vux-tap-active"> 
          <div class="weui_cell_bd weui_cell_primary">
            <flexbox>
              <flexbox-item :span="10"><p>配方肥(18-18-18)等商品</p></flexbox-item>
              <flexbox-item :span="2"><p style="text-align:right;padding:0 .5rem">￥123</p></flexbox-item>
            </flexbox>
            <span class="vux-label-desc">2016/11/21 10:22:37</span>
          </div>
        </div>
        <div class="weui-form-preview__ft">
          <a href="javascript:" class="weui-form-preview__btn weui-form-preview__btn_primary">再来一单</a>
        </div>
        <div class="weui-form-preview__ft">
          <a href="javascript:" class="weui-form-preview__btn weui-form-preview__btn_default">辅助操作</a>
          <a href="javascript:" class="weui-form-preview__btn weui-form-preview__btn_primary">点击事件</a>
        </div>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, Cell,XButton,XHeader,Flexbox,FlexboxItem } from 'vux'


export default {
  components: {
    Group,XButton,XHeader,Flexbox,FlexboxItem,Cell
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.ctph-order-list-header{
  font-size:.7rem;
  line-height:.7rem;
  .weui_cell_bd{
    img{float:left;margin-right:.5rem;width:1.5rem;height:1.5rem;border-radius:50%;}
    span{float:left;height:1.5rem;line-height:1.5rem;}
  }
}
@import '~vux/src/styles/weui/widget/weui_cell/weui_form/weui-form-preview.less';
</style>