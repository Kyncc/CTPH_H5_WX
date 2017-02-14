<template>
  <div class="recordHistory">
    <div>
      <x-header slot="header" :left-options="{showBack: true,backText:'返回'}" style="width:100%;position:absolute;left:0;top:0;z-index:100;" title="个性化配肥">
          <p slot="right">
            <router-link to="detail">
                免费测土
            </router-link>
          </p>
      </x-header>
    </div>
    <div style="padding-top:46px;">
      <flexbox>
        <flexbox-item><div class="flex-demo">1</div></flexbox-item>
        <flexbox-item><div class="flex-demo">2</div></flexbox-item>
        <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      </flexbox>

    </div>
  </div>
</template>

<script>
import {XButton,XHeader,Flexbox,FlexboxItem} from 'vux'

export default {
  components: {
    XButton,XHeader,Flexbox,FlexboxItem
  }
}
</script>