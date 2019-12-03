- npm run script里的，各种工作流脚本一定要在根目录下
 1. dev 开发时运行的脚本
 2. start 启动服务器的脚本
  live-server
 3. build 开发完成后，一键build生成上线文件
  压缩过后的
- webpack bundle 打包工具， 一切都可以打包
 1. webpack src/index.js dist/main.js
 2. webpack-cli 命令行工具
 3. webpack-dev-server 运行webpack编译同时，启动8080端口，web-server

- html template
 1. css
 2. js

- resolve里extensions 加后缀module里加
  rules： [
      规则

  ]

- 一切都可打包 ，最好js css 分家一个文件 ，http请求并发