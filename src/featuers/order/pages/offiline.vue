<template>
  <view-box class="orderOffiline">
    <x-header 
      slot="header" 
      :left-options="{showBack: false,backText:''}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="订单提交成功">
        <p slot="right">
          <router-link to="../../list/?type=reset">完成</router-link>
        </p>
    </x-header>
    <div style="padding-top:46px;">
      <group>
         <flexbox style="padding:.75rem 0;" :gutter="10">
            <flexbox-item :span="4" align="right">
              <i class="iconfont icon-success1" style="font-size:3.5rem"></i>
            </flexbox-item>
            <flexbox-item :span="8">
              <p>支付方式: <span class="default">线下支付<span></p>
              <p>订单金额: <span class="default">￥{{OrderPrePay.offline_pay.total_deal_price}}<span></p>
            </flexbox-item>
          </flexbox>
      </group>
      <group>
        <box gap=".5rem">您可以和商家当面支付现金</box>
        <cell title="银行">{{OrderPrePay.offline_pay.bank_account}}</cell>
        <cell title="账号">{{OrderPrePay.offline_pay.bankcard_no}}</cell>
        <cell title="户名">{{OrderPrePay.offline_pay.total_deal_price}}</cell>
        <cell title="联系电话">
          <a slot="value" :href="'tel:'+OrderPrePay.offline_pay.seller_phone" >{{OrderPrePay.offline_pay.seller_phone}}</a>
        </cell>
      </group>
    </div>
  </view-box>
</template>

<script>
import { Group, Cell,XButton,XHeader,Flexbox,FlexboxItem,Box,ViewBox } from 'vux'
import { mapActions,mapGetters } from 'vuex'

export default {
  components: {
    Group, Cell,XButton,XHeader,Flexbox,FlexboxItem,Box,ViewBox
  },
  computed:{
    ...mapGetters(['OrderPrePay'])
  }
}
</script>