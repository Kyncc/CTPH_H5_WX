<template>
  <div class="orderDetail">
    <x-header 
      slot="header" 
      :left-options="{showBack: true,backText:'返回'}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="订单详情"
    ></x-header>
    <div style="padding-top:46px;">
      <group title="取消原因">
        <cell title="取消方" value="水稻"></cell>
        <cell title="取消原因" value="水稻"></cell>
     </group>
      <group title="收货信息">
        <cell title="收货人" value="水稻"></cell>
        <cell title="电话" >
          <a href="tel:8888888888" slot="default">8888888888</a>
        </cell>
        <cell title="收货地址" value="安徽省芜湖市芜湖县方村九龙大队"></cell>
        <cell title="交货时间" value="2016-10-11"></cell>
     </group>
     <group title="订单明细">
      <div class="weui_cell vux-tap-active"> 
        <div class="weui_cell_bd weui_cell_primary">
          <flexbox>
            <flexbox-item :span="7"><p>配方肥(18-18-18)</p></flexbox-item>
            <flexbox-item :span="2"><p style="text-align:right;padding:0 .5rem">×1</p></flexbox-item>
            <flexbox-item :span="3"><p style="text-align:right;padding:0 .5rem">￥123</p></flexbox-item>
          </flexbox>
          <span class="vux-label-desc">40公斤/袋</span>
        </div>
      </div>
      <cell value="总计:￥123123.56"></cell>
     </group>
     <group title="商家信息">
        <cell title="商家名称" value="水稻"></cell>
        <cell title="商家地址" value="安徽省芜湖市芜湖县方村九龙大队"></cell>
        <cell title="服务地区" value="2016-10-11"></cell>
        <cell title="服务电话" >
          <a href="tel:8888888888" slot="default">8888888888</a>
        </cell>
     </group>
     <group title="其他信息">
        <cell title="订单号" value="201601111256121"></cell>
        <cell title="订单状态" value="代发货"></cell>
        <cell title="下单时间" value="2016-10-11"></cell>
        <cell title="支付方式" value="在线支付"></cell>
     </group>
    </div>
    <tabbar>
       <flexbox>
         <x-button>再来一单</x-button>
       <flexbox>
    </tabbar>
  </div>
</template>

<script>
import { Group, Cell ,XInput,XButton,XHeader,Tabbar, TabbarItem,Flexbox,FlexboxItem } from 'vux'
// import { orderGoodsList } from 'components'


export default {
  components: {
    Group,XInput ,XButton,XHeader,Tabbar, TabbarItem,Flexbox,FlexboxItem,Cell
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style scoped>

</style>