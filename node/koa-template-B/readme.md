## koa 中间件 middleWare 
app.use(middleWare) 就是一个中间件
next 下一个中间件
每一次 use 都会注册一个中间件
[middleWare1，middleWare2]
1. async 函数
2. 洋葱模型： 一层一层往最里面执行，最后一个中间件完了，一层往外冒泡执行剩余的代码。
3. 解决---解耦：每一个中间件负责一件事。

## X 以X开头的：自定义响应头

## koa 第三方中间件
 koa ctx 就是req + res 组成的对象
  ctx: {
      req: {},
      res: {}
  }
  koa-views
 接着扩展ctx，接着往ctx上面塞东西
   ctx: {
      req: {},
      res: {},
      render: () => {}
  }


##
 - package.json 项目描述
   node依赖： npm install 下来的文件。
   -S就是向：
   "dependencies": {
    "ejs": "^2.6.1",
    "koa": "^2.7.0",
    "koa-views": "^6.2.0"
    } 里面放版本号
   npm i node_modules 目录
   koa 压缩 -> 20个依赖 500M

## ejs
  <%= %> 原样输出
  <%- %> 解析 html
  <% %> 解析 JS