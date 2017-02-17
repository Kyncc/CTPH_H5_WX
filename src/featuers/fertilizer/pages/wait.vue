<template>
  <div class="fertilizerWait">
     <x-header 
      slot="header" 
      :left-options="{showBack: true,backText:'返回'}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="测土配肥"
    ></x-header>
    <div style="padding-top:46px;">
        <group >
            <cell title="种植作物" value="水稻"></cell>
            <cell title="作物品种" value="水稻"></cell>
            <cell title="上季产量" value="水稻"></cell>
            <cell title="测土机构" value="水稻"></cell>
        </group>
        <div style="padding:1rem;">
          <x-button disabled >预约成功等待测土</x-button>
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
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>


<style scoped>

</style>