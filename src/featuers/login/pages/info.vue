2<template>
  <div>
      <x-header 
        slot="header" 
        :left-options="{showBack: false,backText:'返回'}" 
        style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
        title="完善信息"></x-header>
    <div style="padding-top:46px;">
      <group class="weui_cells_form">
        <x-input name="username" placeholder="姓名"  v-model="username" is-type="china-name"  ref="username"></x-input>
        <x-input name="mobile" placeholder="手机号" keyboard="number" v-model="mobile" is-type="china-mobile"  ref="mobile"></x-input>
      </group>
      <div style="padding:1rem">
        <x-button type="primary" :disabled="disable"> 确定</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell ,XInput,XButton,XHeader } from 'vux'

export default {
  components: {
    Group,XInput,XButton,Cell,XHeader
  },
  data () {
    return {
      disable: false,
      mobile:'',
      username:''
    }
  },
  // computed: {
  //    disable(){
  //       return (this.$refs.mobile.valid && this.$refs.username.valid ? false : true);
  //    }
  // }
}
</script>

<style lang="less" scroped>
.weui_cells{
  margin-top:0px;
}
</style>