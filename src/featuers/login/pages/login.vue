<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../../../assets/logo.png">
    </div>
     <group class="weui_cells_form">
      <x-input name="mobile" placeholder="手机号" keyboard="number" v-model="mobile" is-type="china-mobile" v-ref:mobile></x-input>
      <x-input name="code" placeholder="验证码" keyboard="number" class="weui_vcode" style="padding:0 15px;" :value.sync="code" :min="6" :max="6"  v-ref:code>
        <x-button slot="right"  type="primary"  style="width:118px;height:49px;border-radius:0;"  ></x-button>
      </x-input>
    </group>
  </div>
</template>

<script>
import { Group, Cell ,XInput,XButton } from 'vux'

export default {
  components: {
    Group,XInput ,XButton,Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>