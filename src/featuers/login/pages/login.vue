<template>
  <div>
    <div style="text-align: center">
      <img class="logo" src="../../../assets/logo.png">
    </div>
     <group class="weui_cells_form">
      <x-input name="mobile" placeholder="手机号" keyboard="number" v-model="mobile" is-type="china-mobile"></x-input>
      <x-input name="code" placeholder="验证码" keyboard="number" class="weui_vcode" v-model="code" style="padding:0 15px;" >
        <x-button slot="right"  :text="btnValue" :disabled="currentDown" type="primary"  style="width:118px;height:49px;border-radius:0;" @click.native="_sendCode"></x-button>
      </x-input>
    </group>
  </div>
</template>

<script>
import { Group, Cell ,XInput,XButton } from 'vux'
import { mapActions,mapGetters } from 'vuex'

export default {
  components: {
    Group,XInput ,XButton,Cell
  },
  data () {
    return {
      mobile:'',
      code:'',
      btnValue: '获取验证码',
      currentDown:false,
    }
  },
  methods: {
    ...mapActions(["getRegisterCode","getRegisterCodeResult"]),
    _sendCode(e){
        let time = 60
        let self = this
        this.currentDown = true
        let timeDown = setInterval(function(){
            time--;
            self.btnValue = '已发送('+time +')' ;
            if(time == '0') {
              clearInterval(timeDown)
              self.btnValue = '获取验证码'
              self.currentDown = false
            };
        },1000);
    }
  }
}
</script>