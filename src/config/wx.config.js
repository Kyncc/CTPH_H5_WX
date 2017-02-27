/*
* 使用方法
* 1、需要使用的页面中引入当前js文件
*   eg:
*     import Wechat from 'config/wx.config'
* 2、配置需要分享的信息
*   eg:
*     let config={
*        title: '测图配肥',
         desc: '安徽阡陌网络科技有限公司--测土配肥',
         link: url,
         imgUrl: 'http://www.qmant.com/assets/img/sharebie.jpg',
         success: function () {
             Vue.$vux.toast.show({
             text: '感谢您的分享！',
             time: 1000,
             })
         }
*     }
*     备：config可以不用配置，若不配置的会采用默认的配置【defaultConfig】
*     执行
*     Wechat(config)
*
*     备注：config中可以选写，如果没有写，会从下面的【defaultConfig】中取默认的值
*
*   */
import Vue from 'vue'
import Axios from 'axios'
import {WechatPlugin} from 'vux'
import wxBaseConfig from './wx.base'

export default function (userConfig) {
  let wx = WechatPlugin.$wechat;
  let url = location.href.split('#')[0];
  // let url=wxBaseConfig.baseUrl.split('#')[0];
  // let url=encodeURIComponent(location.href.split('#')[0]);
  // let url=wxBaseConfig.baseUrl.split('#')[0];
  let defaultConfig = {
    title: '使用爱农田配肥，庄稼长势好多了！',
    desc: '同样种的水稻，同样是种田的老把事，隔壁老王的长势为啥就好这么多？',
    link: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf565864b6a1a358d&redirect_uri=http%3a%2f%2fpeifei.qmant.com%2fnoa%2ftoken%3fpage%3dhttp%3a%2f%2fpeifei.qmant.com/index&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect',
    imgUrl: 'http://o9s1f7266.bkt.clouddn.com/ant_logo.png',
    success: function () {
      Vue.$vux.toast.show({
        text: '感谢您的分享！',
        time: 1000,
      })
    }
  }
  //需要分享的内容
  let wxConfig = Object.assign({}, defaultConfig, userConfig)
  //获取wx分享配置信息
  Axios.post(wxBaseConfig.apiUrl, {
    url: url
  })
    .then(function (data) {
      let wxConfigData=data.data.data;
      wx.config({
        debug: false,
        appId: wxBaseConfig.appId,
        timestamp: wxConfigData.timestamp,
        nonceStr: wxConfigData.nonceStr,
        signature: wxConfigData.signature,
        jsApiList: [
          'onMenuShareAppMessage',
          'onMenuShareTimeline',
          'showMenuItems',
          'hideAllNonBaseMenuItem',
          'chooseWXPay'
        ]
      });
      wx.ready(function () {
        wx.hideAllNonBaseMenuItem()
        wx.showMenuItems({
          menuList: [
            'menuItem:share:appMessage',
            'menuItem:share:timeline'
          ]
        })
        //分享给朋友
        wx.onMenuShareAppMessage(wxConfig)
        //分享到朋友圈
        wx.onMenuShareTimeline(wxConfig)
      })
    })
    .catch(function (error) {
    })
}
