<template>
  <div>
    <x-header
      slot="header"
      :left-options="{showBack: true,backText:'返回'}"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      title="地址列表"
    >
      <p slot="right">
        <router-link to="address_add">
          新增
          <i class="iconfont icon-chenggong"></i>
        </router-link>
      </p>
    </x-header>
    <div style="padding-top: 46px;background: #fff;">
      <div>
        <div class="weui_cell vux-tap-active">
          <div>
            <div class="weui_cell_hd"></div>
            <div class="weui_cell_bd weui_cell_primary">
              <p>
                盼盼 &nbsp;18605530404
              </p>
              <span class="vux-label-desc">
                安徽省芜湖市观澜路1号安徽省芜湖市观澜路1号安徽省芜湖市观澜路1号
              </span>
            </div>
          </div>
        </div>
        <div style="border-bottom: 1px solid #ccc;padding-left: 16px;">
          <flexbox>
            <flexbox-item :span="5">
              <div class="selected">
                <i class="iconfont icon-chenggong"></i>
                默认地址
              </div>
            </flexbox-item>
            <flexbox-item :span="3">
              <router-link to="address_edit" style="color: #000;">
                <i class="iconfont icon-edit"></i>
                编辑
              </router-link>
            </flexbox-item>
            <flexbox-item :span="3">
              <div @click="showDelete">
                <i class="iconfont icon-iconfontdelete" style="font-size: 20px;"></i>
                删除
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
    <confirm v-model="show" title="删除地址"
             @on-cancel="onCancel"
             @on-confirm="onConfirm">
      <p style="text-align:center;">您确定删除当前地址吗？删除后不可恢复，请谨慎删除！</p>
    </confirm>
  </div>
</template>

<script>
  import {XButton, XHeader, Flexbox, FlexboxItem, Picker, GroupTitle, Group, Cell, Confirm} from 'vux';
  export default {
    components: {
      XButton, XHeader, Flexbox, FlexboxItem, Picker, GroupTitle, Group, Cell, Confirm
    },
    methods: {
      onCancel () {
        console.log('取消删除地址')
      },
      onConfirm () {
        console.log('确认删除地址')
      },
//      显示删除的confirm
      showDelete(e){
        e.preventDefault();
        this.show = true;
      },
      change (value) {
        console.log('new Value', value)
      }
    },
    data () {
      return {
        show: false
      }
    }
  }
</script>
<style>
  @import "list.less";
</style>
