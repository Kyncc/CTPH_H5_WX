<template>
  <div class="recordHistory">
    <div>
      <x-header slot="header" :left-options="{showBack: false,backText:'返回'}" style="width:100%;position:absolute;left:0;top:0;z-index:100;"  title="测土配肥记录">
        <router-link to="/fertilizer" slot="right"> 
          <p>申请</p>
        </router-link>
      </x-header>
    </div>
    <div style="padding-top:46px;">
      <div class="weui_media_box weui_media_small_appmsg">
        <div class="weui_cells weui_cells_access">
          <router-link to="detail">
            <div class="weui_panel weui_panel_access">
              <div class="weui_panel_hd">
                2017年101月
              </div>
              <div class="weui_panel_bd">
                <a href="#!/component/cell" class="weui_media_box weui_media_appmsg">
                  <div class="weui_media_bd">
                    <h4 class="weui_media_title ">谷兆测土配方有限公司</h4>
                    <p class="weui_media_desc">
                      基肥测土申请
                    </p>
                  </div>
                </a>
              </div>
              <p class="weui_panel_ft">查看更多</p>
            </div>
          </router-link>
        </div>
      </div>
      </section>
    </div>
  </div>
</template>

<script>
import {XButton,XHeader,Panel} from 'vux'

export default {
  components: {
    XButton,XHeader,Panel
  }
}
</script>