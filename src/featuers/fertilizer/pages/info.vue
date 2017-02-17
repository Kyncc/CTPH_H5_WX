<template>
  <div class="fertilizerInfo">
    <x-header 
      slot="header" 
      :left-options="{showBack: true,backText:'返回'}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="测土配肥"
    ></x-header>
    <div style="padding-top:46px;">
      <group title="完善信息后会为您提供免费的测土服务">
        <selector title="种植作物" :options="cropList" v-model="cropId"></selector>
        <x-input title="作物品种 " name="type" v-model="type" placeholder="请填写作物品种"></x-input>
        <x-input title="上季产量 " name="count" v-model="count" placeholder="" :min="3" :max="3" ></x-input>
        <selector title="测土机构" :options="organizationList" v-model="organizationId" ></selector>
      </group>
      <div style="padding:1rem;">
        <x-button type="primary" action-type="button">确定</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import { Group, Cell ,XInput,XButton,Selector,XHeader } from 'vux'
import { mapActions,mapGetters } from 'vuex'

export default {
  components: {
    Group,XInput ,XButton,Selector,XButton,XHeader,Cell,InfiniteLoading
  },
  data () {
    return {
      type:"",
      count:"",
      organizationId:'',
      cropList:[{key: '0', value: '单季稻'}, {key: '1', value: '早稻'}, {key: '2', value: '晚稻'}],
      organizationList:[{key: '0', value: '单季稻'}, {key: '1', value: '早稻'}, {key: '2', value: '晚稻'}],
      cropId:'0',
      organizationId:'0'
    }
  },
  computed:{
    ...mapGetters(['FertilizerApplyInfo'])
	},
  methods:{
    ...mapActions(['postFertilizerApply'])
  }
}
</script>