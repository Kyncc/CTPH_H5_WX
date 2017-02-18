<template>
  <div>
    <x-header
      slot="header"
      :left-options="{showBack: true,backText:'返回'}"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      title="地址选择"
    >
      <p slot="right" @click="$router.go(-1)">
        完成
      </p>
    </x-header>
    <div style="padding-top: 46px;">
      <cell title="您当前选择的地址是：" :inline-desc='address_detail'></cell>
      <div id="app" style="overflow: hidden;">
        <div class="amap-wrapper">
          <el-amap :vid="'amap-vue'"
                   :center="location"
                   :zoom="zoom"
                   :events="events"
                   :touchZoom="touchZoom"
          >
            <el-amap-marker v-for="marker in markers" :position="marker"></el-amap-marker>
          </el-amap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {XButton, XHeader, Flexbox, FlexboxItem, Picker, GroupTitle, Group, Cell, Confirm} from 'vux';
  import { mapActions,mapGetters } from 'vuex'

  export default {
    components: {
      XButton, XHeader, Flexbox, FlexboxItem, Picker, GroupTitle, Group, Cell, Confirm
    },
    data(){
      return {
        zoom: 8,
        address_detail:'',
        location:[118.3601016329, 31.3314392710],
        touchZoom:true,
        markers: [
          [118.3601016329, 31.3314392710]
        ],
        events: {
          'click': (e) => {
            this.markers = [[e.lnglat.lng, e.lnglat.lat]]
            let geocoder =new AMap.Geocoder({
              radius: 1000,
              extensions: "all"
            });
            //获取地点和经纬度
            geocoder.getAddress([e.lnglat.lng, e.lnglat.lat], (status, result)=> {
              if (status === 'complete' && result.info === 'OK') {
                 this.address_detail = result.regeocode.formattedAddress
                 this.location = [e.lnglat.lng, e.lnglat.lat] 
              }
            });
          }
        }
      }
    },
    methods: {
      ...mapActions(['setMapLocation','setMapAdress']),
      addMarker:(e) => {
        this.markers=[];
        this.markers.push([e.lnglat.lng, e.lnglat.lat]);
      }
    },
    created(){
      //获取当前用户经纬的地址
      let geocoder =new AMap.Geocoder({
        radius: 1000,
        extensions: "all"
      })
      
      geocoder.getAddress(this.location, (status, result)=> {
        if (status === 'complete' && result.info === 'OK') {
          this.address_detail = result.regeocode.formattedAddress 
          this.location = [118.3601016329,31.3314392710]
        }
      })

    }
  }
</script>

<style>
  .amap-wrapper {
    width: 100%;
    height: 33rem;
  }
</style>
