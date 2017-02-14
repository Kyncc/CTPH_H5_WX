<template>
  <div class="recordHistory">
    <div>
      <x-header slot="header" :left-options="{showBack: true,backText:'返回'}" style="width:100%;position:absolute;left:0;top:0;z-index:100;"  title="我的记录"></x-header>
    </div>
    <div style="padding-top:46px;">
      <div class="weui_media_box weui_media_small_appmsg">
        <div class="weui_cells weui_cells_access">
          <router-link to="detail">
            <div class="weui_panel weui_panel_access">
              <div class="weui_panel_hd">
                图文组合列表
              </div>
              <div class="weui_panel_bd">
                <a href="#!/component/cell" class="weui_media_box weui_media_appmsg">
                  <div class="weui_media_bd">
                    <h4 class="weui_media_title">标题一</h4>
                    <p class="weui_media_desc">
                      由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
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