<template>
  <div>
    <x-header
      slot="header"
      :left-options="{showBack: true,backText:'返回'}"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      title="地址列表"
    ></x-header>
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
                安徽省芜湖市观澜路1号
              </span>
            </div>
            <div class="weui_cell_ft with_arrow"></div>
          </div>
        </div>
        <div style="border-bottom: 1px solid #ccc;padding-left: 16px;">
          <flexbox>
            <flexbox-item :span="7">
              <icon type="success"></icon>
              设为默认
            </flexbox-item>
            <flexbox-item :span="2">编辑</flexbox-item>
            <flexbox-item :span="3">删除</flexbox-item>
          </flexbox>
        </div>
      </div>
      <div>
        <div class="weui_cell vux-tap-active">
          <div>
            <div class="weui_cell_hd"></div>
            <div class="weui_cell_bd weui_cell_primary">
              <p>
                盼盼 &nbsp;18605530404
              </p>
              <span class="vux-label-desc">
                安徽省芜湖市观澜路1号
              </span>
            </div>
            <div class="weui_cell_ft with_arrow"></div>
          </div>
        </div>
        <div style="border-bottom: 1px solid #ccc;padding-left: 16px;">
          <flexbox>
            <flexbox-item :span="7">设为默认</flexbox-item>
            <flexbox-item :span="2">编辑</flexbox-item>
            <flexbox-item :span="3">删除</flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {XButton, XHeader, Flexbox, FlexboxItem, Picker, GroupTitle, Group, Cell} from 'vux'
  export default {
    components: {
      XButton, XHeader, Flexbox, FlexboxItem, Picker, GroupTitle, Group, Cell
    },
    methods: {
      change (value) {
        console.log('new Value', value)
      }
    },
    data () {
      return {}
    }
  }
</script>
