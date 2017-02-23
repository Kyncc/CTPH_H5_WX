<template>
  <view-box class="peronsalCart">
    <x-header 
      slot="header" 
      :left-options="{showBack: true,backText:'返回'}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="确认订单"
    ></x-header>
    <div style="padding-top:46px;">
      <group title="我的地址">
        <div class="weui_cell vux-tap-active">
            <div class="weui_cell_hd" style="padding-right:.5rem">
              <i class="iconfont icon-adress" style="font-size:1.5rem;"></i>
            </div> 
            <div class="weui_cell_bd weui_cell_primary">
              <p class="adressUser">
                  <span>好好</span>
                  <span>18315507973</span>
                  <span class="default">[默认地址]</span>
              </p> 
              <span class="vux-label-desc">
                  北京市北京东城区QQ
              </span>
            </div> 
            <div class="weui_cell_ft with_arrow"> </div> 
        </div>
      </group>
      <group  title="交货时间" class="goodsTime">
        <cell title="时间选择" >
          <input slot="value" style="height:30px"  type="date" :min="mintime" v-model="delivery_at">
        </cell>
      </group>
       <group title="支付方式">
         <radio title="type" v-model="pay" :options="payList"></radio>
       </group>  
      <group title="商品详情">
        <p style="padding:.25rem;text-indent:1em;">{{PersonalOrder.shop_name}}</p>
        <div class="weui_cell "> 
          <div class="weui_cell_bd weui_cell_primary">
            <flexbox>
              <flexbox-item :span="6"><p>1.配方肥({{PersonalOrder.n_percent}}-{{PersonalOrder.p_percent}}-{{PersonalOrder.k_percent}})</p></flexbox-item>
              <flexbox-item :span="2"><p style="text-align:right;padding:0 .5rem">×{{PersonalOrder.buy_amount}}</p></flexbox-item>
              <flexbox-item :span="4"><p style="text-align:right;padding:0 .5rem">￥{{PersonalOrder.total_deal_price}}</p></flexbox-item>
            </flexbox>
          </div>
        </div>
      </group>
    </div>
    <tabbar class="footer">
      <flexbox :gutter="0">
        <flexbox-item :span="8" >
          <x-button type="primary" class="price">
            <i class="iconfont icon-edit"></i>
            ￥{{PersonalOrder.total_deal_price}}
          </x-button>
        </flexbox-item>
        <flexbox-item :span="4" >
          <x-button type="primary" class="buy" @click.native="_buy">立即购买</x-button>
        </flexbox-item>
      <flexbox>
  </tabbar>
  </view-box>
</template>

<script>
import { Group, Cell ,XInput,XButton,XHeader,Tabbar,Flexbox,FlexboxItem,Radio,ViewBox  } from 'vux'
import { mapActions,mapGetters } from 'vuex'
import { dateFormat } from 'vux'
import moment from 'moment'

export default {
  components: {
    Group,XInput,XButton,XHeader,Tabbar,Flexbox,FlexboxItem,Cell,Radio,ViewBox 
  },
  data () {
    return {
      payList: [{key: '2', value: '微信支付'},{key: '3', value: '线下支付'}],
      pay:null,
      delivery_at:null,
      mintime:dateFormat(new Date(), 'YYYY-MM-DD')
    }
  },
  computed:{
    ...mapGetters(['PersonalOrder','OrderPrePay','PersonalWaitOrderId']),
	},
  methods: {
     ...mapActions(['setPersonalInfoDetail','postPersonalOrder','getOrderPrePay']),
    _buy(){
      if(!this._valid()) return 
      this.setPersonalInfoDetail({
        "pay_type":this.pay,
        "delivery_at":this.delivery_at,
        "receiver_address_id":52
      })
      //发起支付
      this.postPersonalOrder()
      .then((res)=>{
        this.getOrderPrePay({
            "order_id":res.data.data.order_id
        })
        .then(()=>{
            //线下支付
            if(this.OrderPrePay.pay_type === 3){
              this.$router.replace(`/order/offiline/${this.PersonalWaitOrderId}/`)
              return
            }
            //微信支付
            if(this.OrderPrePay.pay_type === 2){



            }
        })
      })
    },
    //验证提交订单的正确性
    _valid(){
      if(!moment().isBefore(this.delivery_at)){
        this.$vux.toast.show({text:'发货时间要大于今天',type:'warn',time:'1000'})
        return false
      }
      if(!this.pay){
        this.$vux.toast.show({text:'请选择支付方式',type:'warn',time:'1000'})
        return false
      }
      return true
    }
    //线下支付的跳转
  }
}
</script>