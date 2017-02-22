<template>
  <view-box ref="viewBox" class="orderList">
    <x-header 
      slot="header" 
      :left-options="{showBack:false,backText:'返回'}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="订单列表">
      <p slot="right" @click="_reset">刷新</p>
    </x-header>

    <div style="padding-top:46px;">
      <div style="background:#fbf9fe">
        <div v-for="(order,index) in OrderList">
          <group>
            <order-list :order="order" @on-click-order="_orderDetail(index)" @on-click-pay="_orderPay(index)" @on-click-cancel="_orderCancel(index)">
            </order-list>
          </group>
        </div>
      </div>
      <infinite-loading :on-infinite="_onInfinite"  ref="infiniteLoading" spinner="waveDots">
        <div slot="no-results"><p style="padding:1rem;text-align:center;" >服务异常</p></div>
        <div slot="no-more"><p style="padding:1rem;text-align:center;">已加载全部订单</p></div>
      </infinite-loading>
    </div>

    <alert v-model="alertShow" title="提示">
      <p style="text-align:center;">该订单选择的是银行卡支付，请在爱农田APP上进行支付</p>
    </alert>

    <confirm v-model="confirmShow" title="提示"  @on-confirm="onConfirm">
      <p style="text-align:center;">您确定要取消订单么?</p>
    </confirm>

    <x-dialog v-model="offilineShow" class="dialog" :hideOnBlur="true">
        <p class="dialog-title">您可以和商家当面支付现金完成支付，或者根据以下信息进行转账。</p>
        <p>账号：</p>
        <p>户名：</p>
        <p>联系电话：</p>
      <span class="vux-close" @click="offilineShow=false"></span>
    </x-dialog>
  </view-box>

</template>

<script>
import { Group, Cell,XButton,XHeader,Flexbox,FlexboxItem,Alert , Confirm,XDialog,ViewBox } from 'vux'
import InfiniteLoading from 'vue-infinite-loading'
import OrderList from 'components/orderList'
import { mapActions,mapGetters } from 'vuex'

export default {
  components: {
    Group,XButton,XHeader,Flexbox,FlexboxItem,Cell,OrderList,Alert ,Confirm,InfiniteLoading,XDialog,ViewBox 
  },
  data () {
    return {
      alertShow:false,
      confirmShow:false,
      offilineShow:false,
      selectOrder:''
    }
  },
  computed:{
    ...mapGetters(['OrderList','OrderListScroll']),
  },
  activated(){
    // this.$nextTick(() => {
      // document.getElementsByClassName("vux-fix-safari-overflow-scrolling")[0].scrollTop = this.OrderListScroll
    // })
  },
  deactivated(){
    
    // this.setOrderListScroll(document.getElementsByClassName("vux-fix-safari-overflow-scrolling")[0].scrollTop)
  },
  methods: {
    ...mapActions(['getOrderList','getOrderCancel','orderListClear','setOrderListScroll']),
     _onInfinite(){
         this.getOrderList()
        .then((res)=>{
          if(res.data.data.order_list.length < 10 ){
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
          }
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        })
        .catch((error)=>{
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
        })
     },
     /** 进入详情*/
    _orderDetail(index){
      this.$router.push(`../detail/${this.OrderList[index].order_id}`)
    },
    /** 取消订单*/
    _orderCancel(index){
      this.selectOrder = this.OrderList[index].order_id 
      this.confirmShow = true
    },
    /** 订单支付*/
    _orderPay(index){
      console.log();
      // this.selectOrder = this.OrderList[index].order_id 
      this.offilineShow = true
    },
     /** 刷新*/
    _reset(){
      this.orderListClear()
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
    },
     /** 取消订单*/
    onConfirm(){
      this.getOrderCancel({
        "order_id":this.selectOrder
      })
      .then(()=>{
        setTimeout(()=>{
          this.orderListClear()
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        },1000)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/close';
.weui_cells{
  margin:0;
}
.dialog {
  p{font-size:.75rem;}
  .weui-dialog{
    padding:3rem;
    border-radius: 15px;
    padding-bottom: 15px;
  }
  .dialog-title {
    color: #666;
  }
  .vux-close {
    position:absolute;
    top:-10px;
    right:10px;
    background:#ccc;
  }
}
</style>
