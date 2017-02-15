<template>
  <div class="recordHistory">
    <div>
      <x-header slot="header" :left-options="{showBack: true,backText:'返回'}" style="width:100%;position:absolute;left:0;top:0;z-index:100;" title="个性化配肥">
        <p slot="right">
          <router-link to="detail">免费测土</router-link>
        </p>
      </x-header>
    </div>
    <div style="padding-top:46px;">
      <cell title="配肥信息"></cell>
      <group-title>你可以根据土壤得养分情况个性化选择配肥比例</group-title>
      <flexbox style="padding:0 10px">
        <flexbox-item>
          <group-title style="text-align:center" class="vux-1px-b">氮(N)<sub></sub></group-title>
          <picker :data='num' v-model='danNum' @on-change='change'></picker>
        </flexbox-item>
        <flexbox-item>
          <group-title style="text-align:center">磷(P<sub>2</sub>O<sub>5</sub>)</group-title>
          <picker :data='num' v-model='linNum' @on-change='change'></picker>
        </flexbox-item>
        <flexbox-item>
          <group-title style="text-align:center">钾(K<sub>2</sub>O)</group-title>
          <picker :data='num' v-model='jiaNum' @on-change='change'></picker>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import {XButton,XHeader,Flexbox,FlexboxItem,Picker,GroupTitle,Group,Cell} from 'vux'

let num = []
for (var i = 0; i <= 60; i++) {
  num.push({
    name: i ,
    value: i + ''
  })
}

export default {
  components: {
    XButton,XHeader,Flexbox,FlexboxItem,Picker,GroupTitle,Group,Cell
  },
  methods: {
    change (value) {
      console.log('new Value', value)
    }
  },
  data () {
    return {
      num: [num],
      jiaNum:['18','18'],
      danNum:['18','18'],
      linNum:['18','18']
    }
  }
}
</script>