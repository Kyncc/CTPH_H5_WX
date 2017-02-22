<template>
  <div>
    <x-header
      slot="header"
      :left-options="{showBack: true,backText:'返回'}"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      title="地址列表"
    >
      <p slot="right">
        <router-link to="/userinfo/address_add">
          新增
          <i class="iconfont icon-chenggong"></i>
        </router-link>
      </p>
    </x-header>
    <div style="padding-top: 46px;background: #fff;">
      <template v-if="!loading">
        <div v-for="address in AddressList">
          <div>
            <div class="weui_cell vux-tap-active" @click="selectAddress(address)">
              <div>
                <div class="weui_cell_hd"></div>
                <div class="weui_cell_bd weui_cell_primary">
                  <p>
                    {{address.receiver_name}} &nbsp;{{address.receiver_phone}}
                  </p>
                  <span class="vux-label-desc">
                {{address.address_detail}}
              </span>
                </div>
              </div>
            </div>
            <div style="border-bottom: 1px solid #ccc;padding-left: 16px;height: 40px;line-height: 40px;box-sizing: border-box;">
              <flexbox>
                <flexbox-item :span="5">
                  <div v-if="address.is_default == false">
                    <div @click="setDefaultAddress(address)">
                      <i class="iconfont icon-chenggong"></i>
                      设为默认
                    </div>
                  </div>
                  <div v-else>
                    <div class="selected">
                      <i class="iconfont icon-chenggong"></i>
                      默认地址
                    </div>
                  </div>
                </flexbox-item>
                <flexbox-item :span="3">
                  <div @click="editAddress(address)">
                    <i class="iconfont icon-edit"></i>
                    编辑
                  </div>
                </flexbox-item>
                <flexbox-item :span="3">
                  <div @click="showDelete(address)">
                    <i class="iconfont icon-iconfontdelete" style="font-size: 20px;"></i>
                    删除
                  </div>
                </flexbox-item>
              </flexbox>
            </div>
          </div>
        </div>
      </template>
      <infinite-loading :on-infinite="_onInfinite"  ref="infiniteLoading" spinner="default">
        <div slot="no-results" >
          <p style="font-size:1rem;padding:1rem;text-align:center;" @click="_reset">加载失败,请点我重试</p>
        </div>
        <div slot="no-more" >
          <div v-if="AddressList.length > 0">

          </div>
          <div v-else>
            <p style="font-size:1rem;padding:1rem;text-align:center;">没有地址，请先添加地址</p>
          </div>
        </div>
      </infinite-loading>
    </div>
    <confirm v-model="show" title="删除地址"
             @on-cancel="onCancel"
             @on-confirm="onConfirm">
      <p style="text-align:center;">
        您确定删除当前地址吗？
        <br>
        删除后不可恢复，请谨慎删除！
      </p>
    </confirm>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading'
  import {XButton, XHeader, Flexbox, FlexboxItem, Picker, GroupTitle, Group, Cell, Confirm} from 'vux';
  import { mapActions,mapGetters } from 'vuex'
  export default {
    components: {
      XButton, XHeader, Flexbox, FlexboxItem, Picker, GroupTitle, Group, Cell, Confirm,InfiniteLoading
    },
    computed:{
      ...mapGetters(['AddressList','Query']),
    },
    methods: {
      ...mapActions(['getUserAddressListData','setCurrentAddress','deleteAddress','setUserLnglat','setUserAddress','setUserName','setUserPhone','setAddressId','setSelectedAddressId']),
      _onInfinite(){
      this.getUserAddressListData()
          .then(()=>{

            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            this.loading = false;
          })
          .catch((error)=>{
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          })
      },
      _reset(e){
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
      },
      onCancel () {
        this.deleteId = '';
      },
      onConfirm () {
//        删除地址
        this.deleteAddress({
          receiver_address_id:this.deleteId
        })
          .then((res)=>{
          if(res.data.code != 20000){
            this.$vux.toast.show({text: res.data.message});
            return;
          }
            this.deleteId='';
          this.$vux.toast.show({
          	text: '删除地址地址成功',
            time:1000
          });
          this._onInfinite();
        })
      },
//      显示删除的confirm
      showDelete(address){
        this.show = true;
        this.deleteId = address.receiver_address_id;
      },
//      设为默认地址
      setDefaultAddress(address){
        this.setCurrentAddress({
          receiver_address_id:address.receiver_address_id
        })
          .then((res)=>{
            if(res.data.code != 20000){
              this.$vux.toast.show({text: res.data.message});
              return;
            }
            this.$vux.toast.show({
            	text: '设为默认地址成功',
              time:1000
            });
            this._onInfinite();
          })
      },
//      编辑地址
      editAddress(address){
        this.setUserLnglat({
          "latitude":address.latitude,
          "longitude":address.longitude
        });
        this.setUserName(address.receiver_name);
        this.setUserPhone(address.receiver_phone);
        this.setUserAddress(address.address_detail);
        this.setAddressId(address.receiver_address_id);
        this.$router.replace('/userinfo/address_edit/')
      },
//      选择当前的地址
      selectAddress(address){
//      	判断是否从下单页面过来选择地址的
      	if(this.Query && this.Query.type == 'select'){
          //      	设置当前选中的地址id
          this.setSelectedAddressId(address);
          history.go(-1);
        }
      }
    },
    data () {
      return {
        show: false,
        loading:true,
        deleteId:'',
      }
    },
  }
</script>
<style>
  @import "list.less";
</style>
