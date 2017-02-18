<template>
  <div>
    <x-header 
        slot="header" 
        :left-options="{showBack: false,backText:'返回'}" 
        style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
        title="个人资料">
    </x-header>
    <div style="padding-top:46px;">
      <group title="请完善个人资料">
        <x-input name="mobile" placeholder="手机号" keyboard="number" v-model="user_phone" is-type="china-mobile" ref="user_phone" required></x-input>
        <x-input name="username" placeholder="姓名" keyboard="text" v-model="cn_name" is-type="china-name"  ref="cn_name" required></x-input>
      </group>
      <div style="padding:1rem">
        <x-button type="primary" @click.native="_finish">确定</x-button>
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
      cn_name:'',
      user_phone:''
    }
  },
  computed: {
    disable(){
      return (this.$refs.cn_name.valid &&  this.$refs.user_phone.valid)
    }
  },
  methods: {
    _finish(){
      if(!this.disable){
        this.$vux.toast.show({text: '参数不正确',type:'warn',time:'1000'})
        return;
      }else{




      }
    }
  }
}
</script>