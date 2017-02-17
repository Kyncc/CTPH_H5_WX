<template>
  <div class="orderPeronsalCart">
    <x-header 
      slot="header" 
      :left-options="{showBack: true,backText:'返回'}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="确认订单"
    ></x-header>
    <div style="padding-top:46px;">
      <group title="我的地址">
        <div class="weui_cell vux-tap-active">
            <div class="weui_cell_hd" style="padding-right:.25rem">
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
        <datetime v-model="time" 
            placeholder="选择交货时间" 
            :min-year=2017 :max-year=2020 format="YYYY-MM-DD"
            @on-change="changeTime"
            title="交货时间" 
            year-row="{value}年" 
            month-row="{value}月" 
            day-row="{value}日" 
            :start-date="startDate"
            confirm-text="完成" cancel-text="取消">
         </datetime>
      </group>
       <group title="支付方式">
         <checklist title="" :max=1 required :options="commonList" v-model="pay" @on-change="change"></checklist>
       </group>  
      <group title="商品详情">
        <p>安徽汇多利农资有限公司</p>
        <div class="weui_cell "> 
          <div class="weui_cell_bd weui_cell_primary">
            <flexbox>
              <flexbox-item :span="7"><p>1.配方肥(18-18-18)</p></flexbox-item>
              <flexbox-item :span="2"><p style="text-align:right;padding:0 .5rem">×1</p></flexbox-item>
              <flexbox-item :span="3"><p style="text-align:right;padding:0 .5rem">￥123</p></flexbox-item>
            </flexbox>
          </div>
        </div>
      </group>
    </div>
    <tabbar class="footer">
      <flexbox :gutter="0">
        <flexbox-item :span="8" >
          <x-button type="primary" class="price">
            ￥1234.56 
          </x-button>
        </flexbox-item>
        <flexbox-item :span="4" >
          <x-button type="primary" class="buy" @click.native="_buy">提交订单</x-button>
        </flexbox-item>
      <flexbox>
  </tabbar>
  </div>
</template>

<script>
import { Datetime,Group, Cell ,XInput,XButton,XHeader,Tabbar, TabbarItem,Flexbox,FlexboxItem,Checklist } from 'vux'


export default {
  components: {
    Group,XInput,XButton,XHeader,Tabbar, TabbarItem,Flexbox,FlexboxItem,Cell,Checklist,Datetime
  },
  data () {
    return {
      commonList: [{key: '1', value: '微信支付'},{key: '2', value: '线下支付'} ],
      pay:['1'],
      startDate:'2017-01-20',
      time:''
    }
  },
  methods: {
    change(){

    },
    changeTime(){

    },
    _buy(){
      this.$router.push("../finish/")
    }
  }
}
</script>