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
        <Cell is-link>
           <div slot="icon" style="padding-right:1rem">
             <i class="iconfont icon-adress" style="font-size:1.5rem;"></i>
           </div> 
           <div slot="default" @click="_intoAddress">
              <template v-if = 'AddressSelect'>
                <p class="adressUser">
                  {{AddressSelect.receiver_name}}
                  {{AddressSelect.receiver_phone}}
                </p> 
                <span class="vux-label-desc ellipsis" >
                  {{AddressSelect.address_detail}}
                </span>
              </template>
              <template v-else>
                <p class="adressUser">
                  您还未填写过收货地址
                </p> 
              </template>
           </div> 
        </Cell>
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
         <Cell :title = 'PersonalOrder.shop_name'></Cell>
         <Cell>
            <flexbox slot="child">
              <flexbox-item :span="6"><p>1.配方肥({{PersonalOrder.n_percent}}-{{PersonalOrder.p_percent}}-{{PersonalOrder.k_percent}})</p></flexbox-item>
              <flexbox-item :span="2"><p style="text-align:right;padding:0 .5rem">×{{PersonalOrder.buy_amount}}</p></flexbox-item>
              <flexbox-item :span="3"><p style="text-align:right;padding:0 .5rem">￥{{PersonalOrder.total_deal_price}}</p></flexbox-item>
            </flexbox>
         </Cell>
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
      </flexbox>
  </tabbar>
  </view-box>
</template>

<script>
import { Group,Cell,XInput,XButton,XHeader,Tabbar,Flexbox,FlexboxItem,Radio,ViewBox,WechatPlugin} from 'vux'
import { mapActions,mapGetters } from 'vuex'
import { dateFormat } from 'vux'
import moment from 'moment'
import Wechat from 'config/wx.config'

Wechat()
let wx = WechatPlugin.$wechat

export default {
  components: {
    Group,XInput,XButton,XHeader,Tabbar,Flexbox,FlexboxItem,Cell,Radio,ViewBox 
  },
  data () {
    return {
      payList: [{key: '2', value: '微信支付'},{key: '3', value: '线下支付'}],
      pay:null,
      delivery_at:null,
      mintime:dateFormat(new Date(),'YYYY-MM-DD')
    }
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      if(vm.AddressList['user_id'] == undefined){
        vm.getUserAddressListData()
      }
    })
  },
  computed:{
    ...mapGetters(['PersonalOrder','OrderPrePay','PersonalWaitOrderId','AddressList','AddressSelect']),
	},
  methods: {
     ...mapActions(['setPersonalInfoDetail','postPersonalOrder','getOrderPrePay','getUserAddressListData']),
     _intoAddress(){
      this.$router.push('/userinfo/address_list/?type=select')
     }, 
    _buy(){
      if(!this._valid()) return 
      this.setPersonalInfoDetail({
        "pay_type":this.pay,
        "delivery_at":this.delivery_at,
        "receiver_address_id":this.AddressSelect.receiver_address_id
      })
      //发起支付
      this.postPersonalOrder()
      .then((res)=>{
        this.getOrderPrePay({
          "order_id":res.data.data.order_id
        })
        .then((res)=>{
            //线下支付
            if(this.OrderPrePay.pay_type === 3){
              this.$router.replace(`/order/offiline/${this.PersonalWaitOrderId}/`)
              return
            }
            //微信支付
            if(this.OrderPrePay.pay_type === 2){
              let self = this
              wx.chooseWXPay({
                  timestamp: res.data.data.weixin_pay.timestamp, 
                  nonceStr: res.data.data.weixin_pay.noncestr, 
                  package: `prepay_id=${res.data.data.weixin_pay.prepayid}`, 
                  signType: 'MD5',
                  paySign: res.data.data.weixin_pay.sign,
                  success: function(res) {
                    self.$router.replace(`/order/list/`)
                  },
                  cancel: function(res) {
                    alert("您已经取消支付！")
                  }
              })
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
      if((typeof this.AddressSelect) == 'undefined'){
        this.$vux.toast.show({text:'收货地址不能为空',type:'warn',time:'1000'})
        return false
      }
      return true
    }
  }
}
</script>