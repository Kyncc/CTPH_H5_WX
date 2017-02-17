<template>
  <div class="orderFinish">
    <x-header 
      slot="header" 
      :left-options="{showBack: true,backText:'详情',preventGoBack:true}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      @on-click-back="_intoDeatil()"
      title="订单提交成功">
        <p slot="right">
          <router-link to="list">完成</router-link>
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
              <p>订单金额: <span class="default">￥10288<span></p>
            </flexbox-item>
          </flexbox>
      </group>
      <group>
        <box gap=".5rem">您可以和商家当面支付现金</box>
        <cell title="银行">草啊用</cell>
        <cell title="账号">6225 7687 8728 4221</cell>
        <cell title="户名">草啊用</cell>
        <cell title="联系电话">
          <a slot="value" href="tel:13605537123">13605537123</a>
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, Cell,XButton,XHeader,Flexbox,FlexboxItem,Box } from 'vux'

export default {
  components: {
    Group, Cell,XButton,XHeader,Flexbox,FlexboxItem,Box
  },
  methods: {
    _intoDeatil(){
      this.$router.push('detail');
    }
  },
  data () {
    return {
      // msg: 'Hello World!'
    }
  }
}
</script>