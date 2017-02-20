<template>
  <div class="personal">
    <div>
      <x-header 
        slot="header" 
        :left-options="{showBack: true,backText:'首页',preventGoBack:true}" 
        style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
        title="个性化配肥"
        @on-click-back="$router.push('/')"
      >
        <p slot="right">
          <router-link to="/fertilizer/">免费测土</router-link>
        </p>
      </x-header>
    </div>
    <div style="padding-top:46px;">
      <group title="配肥信息">
        <group-title style="color:#000">你可以根据土壤得养分情况个性化选择配肥比例</group-title>
        <flexbox style="padding:0 10px;box-sizing:border-box">
          <flexbox-item class="selectCol">
            <group-title class="selectName">氮(N)<sub></sub><i class="icon iconfont icon-select-tb"></i></group-title>
            <picker :data='num' v-model='danNum' @on-change='change'></picker>
          </flexbox-item>
          <flexbox-item class="selectCol">
            <group-title class="selectName">磷(P<sub>2</sub>O<sub>5</sub>)<i class="icon iconfont icon-select-tb"></i></group-title>
            <picker :data='num' v-model='linNum' @on-change='change'></picker>
          </flexbox-item>
          <flexbox-item class="selectCol">
            <group-title class="selectName">钾(K<sub>2</sub>O)<i class="icon iconfont icon-select-tb"></i></group-title>
            <picker :data='num' v-model='jiaNum' @on-change='change'></picker>
          </flexbox-item>
        </flexbox>
      </group>
      <group>
        <flexbox >
          <flexbox-item :span="3" class="price">
            ￥80
          </flexbox-item>
          <flexbox-item :span="3" class="type">
            50公斤/袋
          </flexbox-item>
          <flexbox-item :span="6" >
            <x-number :min="1" :max="99999" :value="1" type="inline" button-style="round" fillable></x-number>
          </flexbox-item>
        </flexbox> 
      </group>
      <group title="配肥站">
        <selector :options="shopList" v-model="shop_id"></selector>
      </group>
    </div>
     <tabbar class="footer">
       <flexbox :gutter="0">
          <flexbox-item :span="8" >
            <x-button type="primary" class="price">
            <i class="iconfont icon-cart"></i>
             共￥1234.56 
            </x-button>
          </flexbox-item>
           <flexbox-item :span="4" >
             <x-button type="primary" class="buy" @click.native="_buy">立即购买</x-button>
          </flexbox-item>
       <flexbox>
    </tabbar>
  </div>
</template>

<script>
import {XButton,XHeader,Flexbox,FlexboxItem,Tabbar, TabbarItem,Picker,GroupTitle,Group,Cell,Selector,XNumber} from 'vux'
import { mapActions,mapGetters } from 'vuex'


let num = []
for (var i = 0; i <= 60; i++) {
  num.push({
    name: i ,
    value: i + ''
  })
}

export default {
  components: {
    XButton,XHeader,Flexbox,FlexboxItem,Picker,GroupTitle,Group,Cell,Selector,XNumber,Tabbar, TabbarItem
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      vm.getShop()
      .then(()=>{
          

      })
    })
  },
  methods: {
    ...mapActions(['getShop']),
    change (value) {
      console.log('new Value', value)
    },
    _buy(){
      this.$router.push('cart/');
    }
  },
  computed:{
    ...mapGetters(['Shop'])
	},
  data () {
    return {
      num: [num],
      jiaNum:['18','18'],
      danNum:['18','18'],
      linNum:['18','18'],
      shopList:[],
      shop_id:'配肥站3'
    }
  },
   watch: {
    //测土机构的数据
    Shop(){
      this.shopList = [];
      this.Shop.forEach((value, index, array) => {
        this.shopList.push({'key':value.shop_id,'value':value.shop_name})
      });
      this.shop_id = this.shopList[0].key;
    }
  }
}
</script>

