<template>
  <div class="orderDetail">
    <x-header 
      slot="header" 
      :left-options="{showBack:false,backText:'返回'}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="订单"
    ></x-header>
    <div style="padding-top:46px;">
      <group style="background:#fbf9fe">
        <template v-for="order in OrderList">
          <order-list :order="order"></order-list>
        </template>
      </group>

      <infinite-loading :on-infinite="_onInfinite"  ref="infiniteLoading" spinner="default">
        <div slot="no-results"><p style="font-size:1rem;padding:1rem;text-align:center;">加载失败,请点我重试</p></div>
        <div slot="no-more"><p style="font-size:1rem;padding:1rem;text-align:center;">已加载全部订单</p></div>
      </infinite-loading>
    </div>

    <alert v-model="alertShow" title="提示">
      <p style="text-align:center;">该订单选择的是银行卡支付，请在爱农田APP上进行支付</p>
    </alert>

    <confirm v-model="confirmShow" title="提示" @on-cancel="onCancel" @on-confirm="onConfirm">
      <p style="text-align:center;">您确定要取消订单么?</p>
    </confirm>

  </div>
</template>

<script>
import { Group, Cell,XButton,XHeader,Flexbox,FlexboxItem,Alert , Confirm } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import { mapActions,mapGetters } from 'vuex'
import OrderList from 'components/orderList'

export default {
  components: {
    Group,XButton,XHeader,Flexbox,FlexboxItem,Cell,OrderList,Alert ,Confirm,InfiniteLoading 
  },
  data () {
    return {
       alertShow:false,
       confirmShow:false
    }
  },
  computed:{
    ...mapGetters(['OrderList']),
	},
  methods: {
    ...mapActions(['getOrderList']),
     _onInfinite(){
        this.getOrderList()
        .then(()=>{

        })
     },
    onCancel() {
      console.log('on cancel')
    },
    onConfirm() {
      console.log('on confirm')
    }
  }
}
</script>

<style scoped>
.weui_cells{
  margin:0;
}
</style>