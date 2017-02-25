<template>
  <view-box class="fertilizerIndex">
    <div class="con1">
      <img src="../../../assets/images/fertilizer/bg.jpg" />
    </div>
    <div class="footer">
      <flexbox :gutter="0">
        <flexbox-item style="box-sizing:border-box;padding:.25rem;" :span="6"><x-button type="primary" plain @click.native="_intoJiFei(1)">免费测追肥</x-button></flexbox-item>
        <flexbox-item style="box-sizing:border-box;padding:.25rem;" :span="6"><x-button type="primary" plain @click.native="_intoJiFei(2)">免费测基肥</x-button></flexbox-item>
      </flexbox>
    </div>
  </view-box>
</template>

<script>
import {XButton,Flexbox,FlexboxItem,ViewBox} from 'vux'
import { mapActions,mapGetters } from 'vuex'

export default {
  components: {
    XButton,Flexbox,FlexboxItem,ViewBox
  },
  computed:{
    ...mapGetters(['FertilizerApply'])
	},
  methods: {
    ...mapActions(['getFertilizerApply']),
    _intoJiFei(type){
       this.getFertilizerApply()
       .then(()=>{
         /**
         *  -1:未申请进入申请
         *  1:进入等待
         *  1:已测进入结果
         */
          if(type == '1'){
             switch(String(this.FertilizerApply.add_apply_status)){
                case '-1': 
                  this.$router.push(`info?type=${type}`) 
                  break;
                case '0': 
                  this.$router.push(`wait/${type}/`) 
                  break;
                case '1': 
                  this.$router.push(`wait/${type}/`) 
                  break;
             }
          }else{
             switch(String(this.FertilizerApply.base_apply_status)){
                case '-1': 
                  this.$router.push(`info?type=${type}`) 
                  break;
                case '0': 
                  this.$router.push(`wait/${type}/`) 
                  break;
                case '1': 
                  this.$router.push(`wait/${type}/`) 
                  break;
             }
          }
       });
    }
  }
}
</script>
