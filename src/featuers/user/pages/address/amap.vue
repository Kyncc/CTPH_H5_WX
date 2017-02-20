<template>
  <div>
    <x-header
      slot="header"
      :left-options="{showBack: true,backText:'返回'}"
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      title="选择地址"
    >
    </x-header>
    <div style="padding-top: 46px;">
      <cell title="您当前选择的地址是：" :inline-desc='addressDetail'></cell>
      <div id="app" style="overflow: hidden;">
        <div class="amap-wrapper">
          <el-amap :vid="'amap-vue'"
                   :center="center"
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
    data () {
      return {
        addressDetail:'',
        zoom: 10,
        center: [],
        touchZoom:true,
        markers: [
          []
        ],
        events: {
          'click': (e) => {
            this.addMarker(e);
            let geocoder =new AMap.Geocoder({
              radius: 1000,
              extensions: "all"
            });
            const that=this;
            geocoder.getAddress([e.lnglat.lng, e.lnglat.lat], function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                that.addressDetail=result.regeocode.formattedAddress;
//        	设置state的中的地址值
                that.setUserAddress(result.regeocode.formattedAddress);
              }
            });
          }
        },
      }
    },
    computed:{
      ...mapGetters(['InfoLnglat']),
    },
    methods: {
      ...mapActions(['setUserLnglat','setUserAddress']),
      addMarker: function (e) {
        this.markers=[];
        this.markers.push([e.lnglat.lng, e.lnglat.lat]);
//        设置state中的经纬度
        this.setUserLnglat({
          "latitude":e.lnglat.lat,
          "longitude":e.lnglat.lng
        });
//        设置中心点
        this.center=[e.lnglat.lng,e.lnglat.lat];
      },
    },
    mounted(){
//      获取当前用户经纬的地址
      let geocoder =new AMap.Geocoder({
        radius: 1000,
        extensions: "all"
      });
      const that=this;
      let currentLnglat=[];
//      判断当前是否有经纬度
      if(that.InfoLnglat.longitude == ''){
//      	没有经纬度,设置为我公司默认的经纬度地址
        currentLnglat=[118.3601016329,31.3314392710];
      }else{
//      	有经纬度
        currentLnglat=[that.InfoLnglat.longitude,that.InfoLnglat.latitude];
      }
//      设置地图中心点
      that.center=currentLnglat;
//      设置地图当前的marker
      that.markers[0]=currentLnglat;
//      获取经纬度的地址
      geocoder.getAddress(currentLnglat, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          that.addressDetail=result.regeocode.formattedAddress;
          that.setUserAddress(result.regeocode.formattedAddress);
        }
      });
    }
  }
</script>

<style>
  .amap-wrapper {
    width: 100%;
    height: 33rem;
  }
</style>
