<template>
  <div class="orderDetail">
    <x-header 
      slot="header" 
      :left-options="{showBack: true,backText:'返回'}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="订单详情"
    ></x-header>
    <div style="padding-top:46px;">
      <template v-if="loading">
        <group title="取消原因">
          <cell title="取消方" :value="(OrderDetail.order.cancelled_type == '1' ? '买家':'买家')"></cell>
          <cell title="取消原因" :value="OrderDetail.order.cancelled_reason"></cell>
        </group>

        <group title="收货信息">
          <cell title="收货人" :value="OrderDetail.order.receiver_name"></cell>
          <cell title="电话" >
            <a :href=`tel:${OrderDetail.order.receiver_phone}` slot="default">{{OrderDetail.order.receiver_phone}}</a>
          </cell>
          <cell title="收货地址" :value="OrderDetail.order.receiver_address_detail"></cell>
          <cell title="交货时间" :value="OrderDetail.order.send_at"></cell>
        </group>

        <group title="订单明细">
          <div class="weui_cell vux-tap-active"> 
            <div class="weui_cell_bd weui_cell_primary">
              <flexbox>
                <flexbox-item :span="7"><p>{{OrderDetail.order_detail.product_name}}({{OrderDetail.order_detail.npk_scale}})</p></flexbox-item>
                <flexbox-item :span="2"><p style="text-align:right;padding:0 .5rem">×{{OrderDetail.order_detail.buy_amount}}</p></flexbox-item>
                <flexbox-item :span="3"><p style="text-align:right;padding:0 .5rem">￥{{OrderDetail.order_detail.product_price}}</p></flexbox-item>
              </flexbox>
              <span class="vux-label-desc">{{OrderDetail.order_detail.product_specification}}</span>
            </div>
          </div>
          <cell :value=`总计:￥${OrderDetail.order.total_deal_price}`></cell>
        </group>

        <group title="商家信息">
            <cell title="商家名称" :value="OrderDetail.order.shop_name"></cell>
            <cell title="商家地址" :value="OrderDetail.order.send_at"></cell>
            <cell title="服务地区" :value="OrderDetail.order.service_region"></cell>
            <cell title="服务电话" >
              <a :href=`tel:${OrderDetail.order.shop_phone}` slot="default">{{OrderDetail.order.shop_phone}}</a>
            </cell>
        </group>

        <group title="其他信息">
            <cell title="订单号" :value="OrderDetail.order.order_no"></cell>
            <cell title="订单状态" :value="OrderDetail.order.order_status"></cell>
            <cell title="下单时间" :value="OrderDetail.order.created_at"></cell>
            <cell title="支付方式" :value="OrderDetail.order.pay_type"></cell>
        </group>

        
      </template>

      <infinite-loading :on-infinite="_onInfinite"  ref="infiniteLoading" spinner="default">
        <span slot="no-results" >
          <p style="font-size:1rem;padding:1rem;text-align:center;" @click="_reset">加载失败,请点我重试</p>
        </span>
      </infinite-loading>

      <tabbar>
        <flexbox>
          <x-button>再来一单</x-button>
        <flexbox>
      </tabbar>
    </div>

  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import { Group, Cell ,XInput,XButton,XHeader,Tabbar, TabbarItem,Flexbox,FlexboxItem } from 'vux'
import { mapActions,mapGetters } from 'vuex'

export default {
  components: {
    Group,XInput ,XButton,XHeader,Tabbar, TabbarItem,Flexbox,FlexboxItem,Cell,InfiniteLoading
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      // vm.getOrderDetail()
    })
  },
  computed:{
    ...mapGetters(['OrderDetail'])
  },
  data () {
    return {
      loading: false
    }
  },
  methods:{
    ...mapActions(['getOrderDetail']),
    _onInfinite(){
      // alert(1);
      this.getOrderDetail()
      .then(()=>{
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
        this.loading = true;
      })
      .catch((error)=>{
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
      })
    },
    _reset(e){
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
    }
  }
}
</script>