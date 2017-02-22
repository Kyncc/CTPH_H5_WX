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
                   :plugin="plugin"
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
  import {mapActions, mapGetters} from 'vuex'
  import wxBaseConfig from 'config/wx.base'
  export default {
    components: {
      XButton, XHeader, Flexbox, FlexboxItem, Picker, GroupTitle, Group, Cell, Confirm
    },
    data () {
      return {
        addressDetail: '',
        zoom: 13,
        center: [],
        touchZoom: true,
        markers: [
          []
        ],
        geocoder: new AMap.Geocoder({
          radius: 1000,
          extensions: "all"
        }),
        events: {
          'click': (e) => {
            this.addMarker(e);
            const that = this;
            this.geocoder.getAddress([e.lnglat.lng, e.lnglat.lat], function (status, result) {
              if (status === 'complete' && result.info === 'OK') {
                that.addressDetail = result.regeocode.formattedAddress;
//        	设置state的中的地址值
                that.setUserAddress(result.regeocode.formattedAddress);
              }
            });
          }
        },
        plugin: [{
          pName: 'ToolBar',
          position: 'LT',
          offset: [10, 20],
          liteStyle: 'true',
        }],
      }
    },
    computed: {
      ...mapGetters(['InfoLnglat']),
    },
    methods: {
      ...mapActions(['setUserLnglat', 'setUserAddress']),
//      转换为高德经纬度
      toGaode: function (lnglat) {
        let currentLnglat = lnglat;
        let x_pi = currentLnglat[0] * currentLnglat[1] / 180.0;
        let x = currentLnglat[0] - 0.0065, y = currentLnglat[1] - 0.006;
        let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
        let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
        let lng = z * Math.cos(theta);
        let lat = z * Math.sin(theta);
        currentLnglat = [lng, lat];
        return currentLnglat
      },
//      转换为百度经纬度
      toBaidu: function (lnglat) {
        let currentLnglat = lnglat;
        let x_pi = currentLnglat[0] * currentLnglat[1] / 180.0;
        let x = currentLnglat[0], y = currentLnglat[1];
        let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
        let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
        let bd_lon = z * Math.cos(theta) + 0.0065;
        let bd_lat = z * Math.sin(theta) + 0.006;
        currentLnglat = [bd_lon, bd_lat];
        return currentLnglat
      },
      addMarker: function (e) {
        let currentLnglat = [e.lnglat.lng, e.lnglat.lat];
        this.setMapMarker(currentLnglat)
      },
      setMapMarker: function (currentLnglat) {
        const that = this;
        //设置地图中心点
        this.center = currentLnglat;
        //设置地图当前的marker
        this.markers[0] = currentLnglat;
        this.setUserLnglat({
          "latitude": this.toBaidu(currentLnglat)[1],
          "longitude": this.toBaidu(currentLnglat)[0]
        });
        //获取经纬度的地址
        this.geocoder.getAddress(currentLnglat, function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            that.addressDetail = result.regeocode.formattedAddress;
            that.setUserAddress(result.regeocode.formattedAddress);
          }
        });
      }
    },
    mounted(){
      let currentLnglat = [];
      const that = this;
//      没有经纬度的时候
      if (this.InfoLnglat.longitude == '') {
        this.$vux.alert.show({
          title: '友情提示',
          content: '请允许获取您的地理位置<br/>这将更快捷的定位到您当前所在地址！'
        });
        currentLnglat = [118.360344, 31.329557];
        this.setMapMarker(currentLnglat);
        let wx = this.$wechat;
        let url = wxBaseConfig.baseUrl;
        //获取wx配置信息
        this.$http.post(wxBaseConfig.apiUrl, {
          url: url
        })
          .then(function (data) {
            let wxConfigData = data.data.data;
            wx.config({
              debug: false,
              appId: wxBaseConfig.appId,
              timestamp: wxConfigData.timestamp,
              nonceStr: wxConfigData.nonceStr,
              signature: wxConfigData.signature,
              jsApiList: [
                'getLocation',
              ]
            });
            wx.ready(function () {
              //  获取位置信息
              wx.getLocation({
                type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                  currentLnglat = [res.longitude, res.latitude]
                  that.setMapMarker(currentLnglat);
                }
              });
            });
          })
          .catch(function () {
            currentLnglat = [118.360344, 31.329557];

            that.setMapMarker(currentLnglat);
          });
      } else {
//      	有经纬度得时候
        currentLnglat = this.toGaode([that.InfoLnglat.longitude, that.InfoLnglat.latitude]);
        that.setMapMarker(currentLnglat);
      }
    }
  }
</script>

<style>
  .amap-wrapper {
    width: 100%;
    height: 25rem;
  }
</style>
