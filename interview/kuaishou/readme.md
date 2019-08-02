基于Vue 2.0 + Vuex + VueRouter 全家桶实现方案来模仿网易云音乐Webapp项目，
css预编译工具使用的是Sass，音乐滚动加载用的是berrterscore，全面采用ES6风格代码

- 图片懒加载 vue-lazyload
- 前后端分离 使用node.js NeteaseCloudMusicAPI proxy 8080 + 3000
- fastclick
- 设计了store
  songs index song singer mode favoriteList searchHistory playHistory
- iconfont
- eslint

- vue项目，分析清楚目录结构
  1. components/  跟路由挂钩工作入口
  2. store/ 全局共享 分模块 了解关键状态
  3. common/ 公共组件不用写
  4. api/ 前后端的协作方式