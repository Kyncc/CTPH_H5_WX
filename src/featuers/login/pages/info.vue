<template>
  <view-box class="peronsalCart">
    <x-header
      slot="header"
      :left-options="{showBack: false,backText:'返回'}"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      title="完善资料">
    </x-header>
    <div style="padding-top: 46px;">
      <group>
        <x-input title="  姓名" placeholder="请输入您的姓名" v-model="name" is-type="china-name" ref="name" required></x-input>
        <x-input title="联系电话" placeholder="请输入您的手机号码" v-model="phone" keyboard="number" is-type="china-mobile" ref="phone" required></x-input>
        <cell title="请填写详细地址" is-link :inline-desc="address" @click.native = "_intoAdd" ></cell>
      </group>
    </div>
    <x-button
      type="primary"
      style="width:90%;margin-top: 1rem;"
      @click.native="_submit"
      :disabled="!disableSubmit">确认</x-button>
  </view-box>
</template>

<script>
  import {XButton, XHeader, Group, XInput, Cell, XTextarea,ViewBox} from 'vux'
  import { mapActions,mapGetters } from 'vuex'
  export default {
    components: {
      XButton, XHeader, Group, XInput, Cell, XTextarea,ViewBox
    },
    computed:{
      ...mapGetters(['InfoLnglat']),
      address(){
        return this.InfoLnglat.address_detail
      },
      disableSubmit(){
        return ( this.name.length > 0 ) && (this.phone.length > 0) && (this.address.length > 0)
      }
    },
    methods: {
      ...mapActions(['setUserInfo']),
      _intoAdd(){
        this.$router.push('/userinfo/amap/')
      },
      _submit(){
        if(!this._checkSubmit()){
          return
        }
        this.setUserInfo({
          "cn_name":this.name,
          "user_phone":this.phone
        })
        .then(()=>{
          this.$router.replace("/")
        })
      },
      /**检测参数*/
      _checkSubmit(){
        if(!this.$refs.phone.valid){
           this.$vux.toast.show({text: '手机号码错误',type:'warn',time:'1000'})
          return false
        }
        if(!this.$refs.name.valid){
          this.$vux.toast.show({text: '姓名填写错误',type:'warn',time:'1000'})
          return false
        }
        return true 
      }
    },
    data () {
      return {
        name:'',
        phone: ''
      }
    }
  }
</script>

<style scroped>
.weui_cells{
  margin-top:0
}
</style>

