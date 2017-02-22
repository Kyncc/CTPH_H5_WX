<template>
  <div class="components_order_list" >

    <div class="weui_cell ctph-order-list-header">
      <div class="weui_cell_bd weui_cell_primary">
        <img :src="order.product_image ? order.product_image : 'http://o9s1f7266.bkt.clouddn.com/ant_logo.png?imageView2/2/w/30/h/30'"  />
        <span>{{order.shop_name}}</span>
      </div> 
      <div class="weui_cell_ft">
        <span v-if="order.order_status === 1">待付款</span>
        <span v-else-if="order.order_status === 2">待生产</span>
        <span v-else-if="order.order_status === 3">待发货</span>
        <span v-else-if="order.order_status === 4">已发货</span>
        <span v-else>已取消</span>
      </div>
    </div>

    <div class="weui_cell vux-tap-active"  @click="$emit('on-click-order')"> 
      <div class="weui_cell_bd weui_cell_primary">
        <template v-for="item in order.order_detail" >
          <flexbox>
            <flexbox-item :span="7"><p class="ellipsis" style="font-size:16px;margin-bottom:.3rem;">{{item.product_name}}({{item.product_specification}})</p></flexbox-item>
            <flexbox-item :span="2"><p class="ellipsis" style="text-align:right;">×{{item.buy_amount}}</p></flexbox-item>
            <flexbox-item :span="3"><p class="ellipsis" style="text-align:right;padding:0 .75rem">￥{{item.product_price}}</p></flexbox-item>
          </flexbox>
        </template>
        <div >
          <p class="vux-label-desc" style="padding:.35rem 0;text-align:right">下单时间:{{order.created_at}}</p>
          <p class="vux-label-desc" style="text-align:right">总价:￥{{order.real_deal_price}}</span></p>
        </div> 
      </div>
    </div>

    <template v-if="order.order_status === 1">
      <div class="weui-form-preview__ft">
        <a href="javascript:;" class="weui-form-preview__btn weui-form-preview__btn_default" @click="$emit('on-click-cancel')">取消订单</a>
        <a href="javascript:;" class="weui-form-preview__btn weui-form-preview__btn_primary" @click="$emit('on-click-pay')">去支付</a>
      </div>
    </template>

  </div>
</template>

<script>

import { Group, Cell,Flexbox,FlexboxItem } from 'vux'

export default {
  name:'OrderList',
  components: {
     Group,Cell,Flexbox,FlexboxItem
  },
  props: {
    order: {}
  },
  methods: {
    intoOrderDetail(){},
    orderCancel(){},
    orderPay(){},
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
.components_order_list{
  background:#fff;
  .weui_cell_ft{
    span{
      border:1px solid @theme-color;
      padding:.25rem;
      border-radius:5px;
      color:@theme-color;
    }
  }
  .weui_cells{
    font-size:16px;
  } 
  .weui-form-preview__btn_primary{
    color:@theme-color;
  }
  .weui-form-preview__ft{
    line-height:40px;
    font-size:.75rem;
  }
}
@import '~vux/src/styles/weui/widget/weui_cell/weui_form/weui-form-preview.less';
</style>