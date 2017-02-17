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
  export default {
    components: {
      XButton, XHeader, Flexbox, FlexboxItem, Picker, GroupTitle, Group, Cell, Confirm
    },
    data () {
      return {
        addressDetail:'安徽省芜湖市弋江区观澜路1号',
        zoom: 8,
        center: window.localStorage.getItem('lnglat').split(','),
        touchZoom:true,
        markers: [
          window.localStorage.getItem('lnglat').split(',')
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
                console.log(result.regeocode.formattedAddress);
                that.addressDetail=result.regeocode.formattedAddress;
//                设置缓存中的地址名称
                window.localStorage.setItem('currentAddress',result.regeocode.formattedAddress);
//                设置缓存中地址的经纬度
                window.localStorage.setItem('currentLnglat',[e.lnglat.lng, e.lnglat.lat])
              }
            });


          }
        },
      }
    },
    methods: {
      addMarker: function (e) {
        this.markers=[];
        this.markers.push([e.lnglat.lng, e.lnglat.lat]);
      },
    },
    mounted(){
//      获取当前用户经纬的地址
      let geocoder =new AMap.Geocoder({
        radius: 1000,
        extensions: "all"
      });
      const that=this;
      geocoder.getAddress(window.localStorage.getItem('lnglat').split(','), function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          that.addressDetail=result.regeocode.formattedAddress;
//                设置缓存中的地址名称
          window.localStorage.setItem('currentAddress',result.regeocode.formattedAddress);
//          设置缓存中地址的经纬度
          window.localStorage.setItem('currentLnglat',window.localStorage.getItem('lnglat'))
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
