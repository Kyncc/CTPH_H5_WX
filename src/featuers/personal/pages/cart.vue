<template>
  <div class="peronsalCart">
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
          <input slot="value" class="weui-input" type="date" :min="mintime" v-model="delivery_at">
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
  </div>
</template>

<script>
import { Group, Cell ,XInput,XButton,XHeader,Tabbar, TabbarItem,Flexbox,FlexboxItem,Radio  } from 'vux'
import { mapActions,mapGetters } from 'vuex'
import { dateFormat } from 'vux'

export default {
  components: {
    Group,XInput,XButton,XHeader,Tabbar, TabbarItem,Flexbox,FlexboxItem,Cell,Radio 
  },
  data () {
    return {
      payList: [{key: '1', value: '微信支付'},{key: '2', value: '线下支付'}],
      pay:'',
      time:'',
      delivery_at:0,
      mintime:dateFormat(new Date(), 'YYYY-MM-DD')
    }
  },
  computed:{
    ...mapGetters(['PersonalOrder']),
	},
  methods: {
     ...mapActions(['setPersonalInfoDetail']),
    _buy(){
      this.$router.push("../offiline/")
    }
  },
  mounted () {
    // console.log(this.min)
  }
}
</script>