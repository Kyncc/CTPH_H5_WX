<template>
  <div>
    <div>
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;"  title="测土配肥"></x-header>
    </div>
    <div style="padding-top:46px;"> 
      <x-button type="primary" action-type="button">我要基肥1</x-button>
      <x-button type="primary" action-type="button">我要追肥</x-button>
    </div>
  </div>
</template>

<script>
  import {XButton,XHeader} from 'vux'

  export default {
    components: {
      XButton,XHeader
    },
    data () {
      return {


      }
    }
  }
</script>