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
          编辑
        </router-link>
      </p>
    </x-header>
    <div style="padding-top: 46px;">
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
        </div>
      </div>
      <infinite-loading :on-infinite="_onInfinite"  ref="infiniteLoading" spinner="default">
        <div slot="no-results" >
          <p style="font-size:1rem;padding:1rem;text-align:center;" @click="_reset">加载失败,请点我重试</p>
        </div>
        <div slot="no-more" >
          <div v-if="AddressList.length > 0"></div>
          <div v-else>
            <p style="font-size:1rem;padding:1rem;text-align:center;">没有地址，请先添加地址</p>
          </div>
        </div>
      </infinite-loading>
    </div>
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
      ...mapGetters(['AddressList']),
    },
    methods: {
      ...mapActions(['getUserAddressListData']),
      _onInfinite(){
      this.getUserAddressListData()
          .then(()=>{
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          })
          .catch((error)=>{
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
          })
      },
      _reset(e){
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
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
    }
  }
</script>
<style>
  @import "list.less";
</style>
