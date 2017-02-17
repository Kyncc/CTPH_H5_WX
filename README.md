# 测土配肥Webapp

> 🤞基于Vue2.0x 全家桶微信项目🤞

## 环境编译

-	[Webpack2.2](https://webpack.js.org/guides/)

-	[VueLoader](http://vue-loader.vuejs.org/en/index.html)

## 数据视图控制

-	[Vue2](http://cn.vuejs.org/guide/)

-	[路由-VueRouter](http://router.vuejs.org/zh-cn/index.html)

-	[单项数据流-Vuex](http://vuex.vuejs.org/zh-cn/index.html)

-	[VueRouter和Vuex流同步-Vuex-router-sync](https://github.com/vuejs/vuex-router-sync)

## UI组件

-	[手机UI库-Vux](https://vux.li/#/zh-CN/README?id=-%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8webpack)

-	[地图-Vue-amap](https://elemefe.github.io/vue-amap/#/docs/map)

-	[图片懒加载-Vue-lazyload](https://github.com/hilongjw/vue-lazyload)

-	[灯箱-PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

-	[loading插件-vue-infinite-loading](https://peachscript.github.io/vue-infinite-loading/#!/events)

## 工具JS

-	[http请求-Axios](https://github.com/mzabriskie/axios)

-	[微信JS-SDK](https://www.npmjs.com/package/weixin-js-sdk)


## 目录结构
----------

```
├── build       # webpack编译配置
├── config      # webpack配置
    ├── http              # 接口配置
    ├── wx.config         # 微信配置
    ├── theme.less        # VUX主题颜色配置
├── dist        # 打包后文件
├── app.vue     # 入口页面
├── main.js     # 入口JS
├── store.js    # store
├── index.html  # html模版
├── components  # 公用的组件
├── src         # 开发目录
  ├── features    # 功能模块
      ├── fertilizer      # 测土配肥
          ├── modules       # 数据业务
          ├── pages         # 页面
      ├── login           # 登陆注册
      ├── order           # 订单
      ├── record          # 测土配肥记录
      ├── personal        # 个性化配肥
```

# 步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

