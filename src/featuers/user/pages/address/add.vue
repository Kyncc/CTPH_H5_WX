<template>
  <div>
    <x-header
      slot="header"
      :left-options="{showBack: true,backText:'返回',preventGoBack:true}"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      title="新建地址"
      @on-click-back="_back"
    >
    </x-header>
    <div style="padding-top: 46px;background: #fff;overflow: hidden;">
      <div id="container"></div>
      <x-input title="  姓名" placeholder="请输入收货人的姓名" v-model="name" is-type="china-name"></x-input>
      <x-input title="联系电话" placeholder="请输入收货人的手机号码" v-model="phone" keyboard="number" is-type="china-mobile"></x-input>
      <group>
        <cell title="请选择收货地址" link="/userinfo/amap/" :inline-desc="address"></cell>
      </group>
    </div>
    <x-button
      type="primary"
      style="width:90%;margin-top: 10px;"
      @click.native="submit"
      :disabled="disableSubmit"
    >确认</x-button>
  </div>
</template>

<script>
  import {XButton, XHeader, Group, XInput, Cell, XTextarea} from 'vux'
  import { mapActions,mapGetters } from 'vuex'
  export default {
    components: {
      XButton, XHeader, Group, XInput, Cell, XTextarea
    },
    computed:{
      ...mapGetters(['InfoLnglat']),
    },
    methods: {
      ...mapActions(['setUserLnglat','setUserAddress','setUserName','setUserPhone','addUserAddressData']),
      submit(){
        const that=this;
//        提交数据
        this.addUserAddressData({
          address:{
            "address_detail":this.InfoLnglat.address_detail,
            "latitude":this.InfoLnglat.latitude,
            "longitude":this.InfoLnglat.longitude,
            "receiver_name":this.name,
            "receiver_phone":this.phone,
          }
        })
          .then((res)=>{
            if(res.data.code != 20000){
              this.$vux.toast.show({
                type:'warn',
                text: res.data.message
              });
              return;
            }
            this.$vux.toast.show({
              text: '新增地址成功',
              time:1000
            });
//    			清空state中的数据
            this.setUserLnglat({
              "latitude":'',
              "longitude":''
            });
            this.setUserName('');
            this.setUserPhone('');
            this.setUserAddress('');
            setTimeout(()=>{
              this.$router.replace('/userinfo/address_list/')
            },1000)
          })
      },
//      检测提交按钮是否可以点击
      checkSubmit(){
        if(
          (this.InfoLnglat.name != '')
          &&
          (this.InfoLnglat.phone != '')
          &&
          (this.InfoLnglat.address_detail != '')
        ){
          this.disableSubmit=false;
        }
      },
      //左边的返回
      _back(){
        this.$router.replace('/userinfo/address_list/')
      }
    },
    data () {
      return {
        name: '',
        phone: '',
        address:'',
        disableSubmit:true
      }
    },
    watch: {
      name: function (val) {
        this.setUserName(val);
        this.checkSubmit();
      },
      phone: function (val) {
        this.setUserPhone(val);
        this.checkSubmit();
      },
      address: function () {
        this.checkSubmit();
      }
    },
    mounted(){
      this.address=(this.InfoLnglat) ? this.InfoLnglat.address_detail : '';
      this.name=(this.InfoLnglat) ? this.InfoLnglat.name : '';
      this.phone=(this.InfoLnglat) ? this.InfoLnglat.phone : '';
    }

  }
</script>
<style>
  @import "add.less";
</style>
