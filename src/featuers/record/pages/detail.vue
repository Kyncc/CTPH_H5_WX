<template>
  <div class="recordDetail">
    <div>
      <x-header slot="header" :left-options="{showBack: true,backText:'返回'}" style="width:100%;position:absolute;left:0;top:0;z-index:100;"  title="基肥测土申请"></x-header>
    </div>
    <div style="padding-top:46px;">
        <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
          <tab style="width:500px;" bar-active-color="#668599" :line-width="1">
            <tab-item selected>村东一号田块</tab-item>
            <tab-item>村东一号田块</tab-item>
            <tab-item>村东一号田块</tab-item>
            <tab-item>村东一号田块</tab-item>
            <tab-item>村东一号田块</tab-item>
          </tab>
        </div>
        <group>
          <cell title="肥料" value="水稻"></cell>
          <cell title="建议施肥量" value="水稻"></cell>
          <cell title="施肥时间" value="水稻"></cell>
          <cell title="施肥方式" value="水稻"></cell>
        </group> 
        <group title="配肥目标">
          <cell title="种植作物" value="水稻"></cell>
          <cell title="作物品种" value="水稻"></cell>
          <cell title="上季产量" value="水稻"></cell>
          <cell title="测土机构" value="水稻"></cell>
        </group>
        <group title="测土结果">
          <cell title="实验编号" value="水稻"></cell>
        </group>
        <div class="weui_cells_title">
          <p style="text-align:center">
            以上信息由 谷兆测土配方有限公司 提供
          <p>
        </div>
    </div>
  </div>
</template>

<script>
import {XButton,XHeader,Group,Cell,Tab,TabItem} from 'vux'

export default {
  components: {
    XButton,XHeader,Group,Cell,Tab,TabItem
  }
}
</script>