<template>
  <div>
     <p>完善信息后会为您提供免费的测土服务</p>
     <group style="margin:1rem 0">
        <cell title="种植作物" value="水稻"></cell>
        <cell title="作物品种" value="水稻"></cell>
        <cell title="上季产量" value="水稻"></cell>
        <cell title="测土机构" value="水稻"></cell>
     </group>
     <x-button disabled >预约成功等待测土</x-button>
  </div>
</template>

<script>
import { Group, Cell ,XInput,XButton } from 'vux'

export default {
  components: {
    Group,XInput,XButton,Cell
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