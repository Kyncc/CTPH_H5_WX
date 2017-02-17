<template>
  <div>
    <x-header
      slot="header"
      :left-options="{showBack: true,backText:'返回'}"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      title="新建地址"
    >
    </x-header>
    <div style="padding-top: 46px;background: #fff;overflow: hidden;">
      <x-input title="  姓名" placeholder="请输入收货人的姓名" v-model="name" is-type="china-name"></x-input>
      <x-input title="联系电话" placeholder="请输入收货人的手机号码" v-model="phone" keyboard="number" is-type="china-mobile"></x-input>
      <x-textarea required placeholder="请填写收货地址" v-model="address"></x-textarea>
    </div>
    <x-button
      type="primary"
      style="width:90%;margin-top: 10px;"
      @click.native="submit"
      :disabled="disable001"
    >确认</x-button>
  </div>
</template>

<script>
  import {XButton, XHeader, Group, XInput, Cell, XTextarea} from 'vux'
  export default {
    components: {
      XButton, XHeader, Group, XInput, Cell, XTextarea
    },
    methods: {
    	submit(){
    		console.log(this.name)
    		console.log(this.phone)
    		console.log(this.address)
      },
    },
    data () {
      return {
        name: '',
        phone: '',
        address: '',
        disable001:true,
      }
    },
    watch: {
      name: function (val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
      }
    }

  }
</script>
<style>
  @import "add.less";
</style>
