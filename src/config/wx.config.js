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
             });
         }
*     }
*     备：config可以不用配置，若不配置的会采用默认的配置【defaultConfig】
*     执行
*     Wechat(config);
*
*     备注：config中可以选写，如果没有写，会从下面的【defaultConfig】中取默认的值
*
*   */
import Vue from 'vue';
import Axios from 'axios';
import {WechatPlugin} from 'vux'
export default function (userConfig) {
  let wx = WechatPlugin.$wechat;
  let url = location.href.split('#')[0];
  let defaultConfig = {
    title: '测图配肥',
    desc: '安徽阡陌网络科技有限公司--测土配肥',
    link: url,
    imgUrl: 'http://www.qmant.com/assets/img/sharebie.jpg',
    success: function () {
      Vue.$vux.toast.show({
        text: '感谢您的分享！',
        time: 1000,
      });
    }
  };
  //需要分享的内容
  let wxConfig = Object.assign({}, defaultConfig, userConfig);
  //获取wx分享配置信息
  Axios.post('http://www.qmant.com/noa/weixin/signature', {
    url: url
  })
    .then(function (data) {
      wx.config({
        debug: false,
        appId: 'wxf565864b6a1a358d',
        timestamp: data.data.timestamp,
        nonceStr: data.data.nonceStr,
        signature: data.data.signature,
        jsApiList: [
          'onMenuShareAppMessage',
          'onMenuShareTimeline',
          'showMenuItems',
          'hideAllNonBaseMenuItem',
          'openLocation'
        ]
      });
      wx.ready(function () {
        wx.hideAllNonBaseMenuItem();
        wx.showMenuItems({
          menuList: [
            'menuItem:share:appMessage',
            'menuItem:share:timeline',
            'menuItem:share:qq',
            'menuItem:share:QZone',
            'menuItem:openWithQQBrowser',
            'menuItem:openWithSafari'
          ]
        });
        //分享给朋友
        wx.onMenuShareAppMessage(wxConfig);
        //分享到朋友圈
        wx.onMenuShareTimeline(wxConfig);
        //分享到QQ
        wx.onMenuShareQQ(wxConfig);
        //分享到QQ空间
        wx.onMenuShareQZone(wxConfig);
      });
    })
    .catch(function (error) {
    });
}
