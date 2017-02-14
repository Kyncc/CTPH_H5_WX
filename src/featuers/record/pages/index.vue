<template>
  <div>
    <div>
      <x-header slot="header" :left-options="{showBack: true,backText:'返回'}" style="width:100%;position:absolute;left:0;top:0;z-index:100;"  title="测土配肥记录"></x-header>
    </div>
    <div style="padding-top:46px;"> 
      <router-link to="history">
        <x-button type="primary" action-type="button">申请免费测土</x-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {XButton,XHeader} from 'vux'

  export default {
    components: {
      XButton,XHeader
    }
  }
</script>