<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="http://o9s1f7266.bkt.clouddn.com/ant_logo.png">
    </div>
     <group class="weui_cells_form">
      <x-input name="mobile" placeholder="手机号" keyboard="number" v-model="mobile" is-type="china-mobile"></x-input>
      <x-input name="code" placeholder="验证码" keyboard="number" class="weui_vcode" v-model="code" style="padding:0 15px;" :value.sync="code" :min="6" :max="6">
        <x-button slot="right"  type="primary"  style="width:118px;height:49px;border-radius:0;" @click.native="getCode">发送验证码</x-button>
      </x-input>
    </group>
    <x-button type="primary" style="margin-top: 20px;height: 50px;line-height: 50px;" @click.native="startLogin">登录</x-button>
  </div>
</template>

<script>
import { Group, Cell ,XInput,XButton } from 'vux'
import { mapActions,mapGetters } from 'vuex'
export default {
  components: {
    Group,XInput ,XButton,Cell
  },
  methods:{
    ...mapActions(['getRegisterCode','getRegisterCodeResult']),
//    获取验证码
    getCode(){
      this.getRegisterCode({
        phone:this.mobile
      })
    },
//    开始登录
    startLogin(){
      this.getRegisterCodeResult({
      	phone:this.mobile,
      	code:this.code,
      })
    }
  },
  data () {
    return {
      mobile: '',
      code: '',
    }
  }
}
</script>
