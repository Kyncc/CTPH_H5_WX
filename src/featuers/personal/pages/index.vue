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
      <group-title>你可以根据土壤得养分情况个性化选择配肥比例</group-title>
      <flexbox>
        <flexbox-item >
          <group-title style="text-align:center" class="vux-1px-b" >氮(尿素)</group-title>
          <picker :data='num' v-model='danNum' @on-change='change'></picker>
        </flexbox-item>
        <flexbox-item>
          <group-title style="text-align:center">磷(磷酸二铵)</group-title>
          <picker :data='num' v-model='linNum' @on-change='change'></picker>
        </flexbox-item>
        <flexbox-item>
          <group-title style="text-align:center">钾(氯化钾)</group-title>
          <picker :data='num' v-model='jiaNum' @on-change='change'></picker>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import {XButton,XHeader,Flexbox,FlexboxItem,Picker,GroupTitle,Group} from 'vux'

let num = []
for (var i = 1; i <= 30; i++) {
  num.push({
    name: i ,
    value: i + ''
  })
}

export default {
  components: {
    XButton,XHeader,Flexbox,FlexboxItem,Picker,GroupTitle,Group
  },
  methods: {
    change (value) {
      console.log('new Value', value)
    }
  },
  data () {
    return {
      num: [num],
      jiaNum:['15','15'],
      danNum:['15','15'],
      linNum:['15','15']
    }
  }
}
</script>