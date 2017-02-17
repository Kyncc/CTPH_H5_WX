<template>
  <div class="fertilizerWait">
     <x-header 
      slot="header" 
      :left-options="{showBack: true,backText:'返回'}" 
      style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
      title="测土配肥"
    ></x-header>
    <div style="padding-top:46px;" >
        <template v-if="!loading">
          <group-title style="text-align:center">预约成功,测土机构将主动联系您</br>测土后会为您提供免费的施肥配方建议</group-title>
          <group>
            <cell title="种植作物" value="水稻"></cell>
            <cell title="作物品种" value="水稻"></cell>
            <cell title="上季产量" value="水稻"></cell>
            <cell title="测土机构" value="水稻"></cell>
          </group>
          <div style="padding:1rem;">
            <x-button  disabled >预约成功 等待测土</x-button>
          </div>
        </template>

        <infinite-loading :on-infinite="_onInfinite"  ref="infiniteLoading" spinner="default">
          <div slot="no-results" >
            <p style="font-size:1rem;padding:1rem;text-align:center;" @click="_reset">加载失败,请点我重试</p>
          </div>
        </infinite-loading>
     </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import { Group, Cell ,XInput,XButton,XHeader,GroupTitle } from 'vux'
import { mapActions,mapGetters } from 'vuex'

export default {
  components: {
    Group,XInput,XButton,Cell,XHeader,GroupTitle,InfiniteLoading
  },
   computed:{
    ...mapGetters(['FertilizerApplyInfo'])
	},
  data () {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions(['getFertilizerApplyInfo']),
    _onInfinite(){
      this.getFertilizerApplyInfo()
      .then(()=>{
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
        this.loading = true;
      })
      .catch((error)=>{
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
      })
    },
    _reset(e){
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
    }
  }
}
</script>
