<template>
  <view-box  class="personal">
    <div>
      <x-header 
        slot="header" 
        :left-options="{showBack: true,backText:'首页',preventGoBack:true}" 
        style="width:100%;position:absolute;left:0;top:0;z-index:100;" 
        title="定制化配肥"
        @on-click-back="$router.push('/')">
        <p slot="right">
          <router-link to="/fertilizer/">免费测土</router-link>
        </p>
      </x-header>
    </div>
    <div style="padding-top:46px;">
      <group title="配肥信息">
        <group-title style="color:#000">你可以根据土壤养分情况个性化选择配肥比例</group-title>
        <flexbox style="padding:0 10px;box-sizing:border-box">
          <flexbox-item class="selectCol">
            <group-title class="selectName">氮(N)<sub></sub><i class="icon iconfont icon-select-tb"></i></group-title>
            <picker :data='num' v-model='danNum'></picker>
          </flexbox-item>
          <flexbox-item class="selectCol">
            <group-title class="selectName">磷(P<sub>2</sub>O<sub>5</sub>)<i class="icon iconfont icon-select-tb"></i></group-title>
            <picker :data='num' v-model='linNum'></picker>
          </flexbox-item>
          <flexbox-item class="selectCol">
            <group-title class="selectName">钾(K<sub>2</sub>O)<i class="icon iconfont icon-select-tb"></i></group-title>
            <picker :data='num' v-model='jiaNum'></picker>
          </flexbox-item>
        </flexbox>
      </group>
      <group>
      <div style="padding:0 .5rem">
          <flexbox>
            <flexbox-item :span="3" class="price">
              ￥{{PersonalOrder.product_price}}
            </flexbox-item>
            <flexbox-item :span="3" class="type">
              {{PersonalOrder.product_specification}}
            </flexbox-item>
            <flexbox-item :span="6" >
              <x-number :min="1" :max="99999" :value="1" type="inline" button-style="round" fillable v-model="count"></x-number>
            </flexbox-item>
          </flexbox> 
        </div>
      </group>
      <group title="配肥站" style="padding-bottom:1.5rem">
        <selector :options="shopList" v-model="shop_id"></selector>
      </group>
    </div>
     <tabbar class="footer">
       <flexbox :gutter="0">
          <flexbox-item :span="8" >
            <x-button type="primary" class="price">
            <i class="iconfont icon-cart"></i>
             ￥{{total}}
            </x-button>
          </flexbox-item>
           <flexbox-item :span="4" >
             <x-button type="primary" class="buy" @click.native="_buy">我要下单</x-button>
          </flexbox-item>
       <flexbox>
    </tabbar>
  </view-box>
</template>

<script>
import {XButton,XHeader,Flexbox,FlexboxItem,Tabbar, ViewBox,TabbarItem,Picker,GroupTitle,Group,Cell,Selector,XNumber} from 'vux'
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
    XButton,XHeader,Flexbox,FlexboxItem,Picker,GroupTitle,Group,Cell,Selector,XNumber,Tabbar, TabbarItem,ViewBox
  },
  beforeRouteEnter(to, from, next){
    next(vm => {
      let self = vm
      self.getShop()                        //获取商铺信息
      if(self.Query.type == 'reset'){       //是否清空数据
        this.clearPersonal()
      }
    })
  },
  methods: {
    ...mapActions(['getShop','clearPersonal','getShopPrice','setPersonalGoodsDetail']),
    _buy(){
      this.setPersonalGoodsDetail({
        "k_percent":this.jiaNum[0],
        "n_percent":this.danNum[0],
        "p_percent":this.linNum[0],
        "total_deal_price":this.total,
        "buy_amount":this.count
      })
      this.$router.push('cart/')
    }
  },
  computed:{
    ...mapGetters(['Shop','Query','PersonalOrder']),
    shop_id(){
      return (this.shopList[0] ? this.shopList[0].key : '')
    },
    shopList(){
      let shopList = []
      this.Shop.forEach((value, index, array) => {
        shopList.push({'key':value.shop_id,'value':value.shop_name})
      })
      return shopList;
    }
	},
  data () {
    return {
      num: [num],
      count:1,
      total:0,
      jiaNum:['18','18'],
      danNum:['18','18'],
      linNum:['18','18']
    }
  },
   watch: {
    shop_id(){
      this.getShopPrice({
          "shop_id":this.shop_id
      })
      .then(()=>{
          this.total = this.PersonalOrder.product_price * this.count
      })
    },
    //增加数量更新价格
    count(){
      this.total = parseFloat(this.PersonalOrder.product_price * this.count).toFixed(2) 
    }
  }
}
</script>

