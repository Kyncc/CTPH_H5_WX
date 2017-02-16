<template>
  <div>
     <p>
        完善信息后会为您提供免费的测土服务
     </p>
     <group class="weui_cells_form">
        <selector title="种植作物" :options="cropList" v-model="cropId"></selector>
        <x-input title="作物品种" name="type" v-model="type" placeholder="请填写作物品种"></x-input>
        <x-input title="上季产量" name="count" v-model="count" placeholder="" :min="3" :max="3" ></x-input>
        <selector title="测土机构" :options="organizationList" v-model="organizationId" ></selector>
    </group>
    <x-button type="primary" action-type="button">确定</x-button>
  </div>
</template>

<script>
import { Group, Cell ,XInput,XButton,Selector } from 'vux'

export default {
  components: {
    Group,XInput ,XButton,Selector,XButton,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      type:"",
      count:"",
      organizationId:'',
      cropList:[{key: '0', value: '单季稻'}, {key: '1', value: '早稻'}, {key: '2', value: '晚稻'}],
      organizationList:[{key: '0', value: '单季稻'}, {key: '1', value: '早稻'}, {key: '2', value: '晚稻'}],
      cropId:'0',
      organizationId:'0'
    }
  }
}
</script>

<style>


</style>