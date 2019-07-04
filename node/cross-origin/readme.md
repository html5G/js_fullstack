- 跨域
  浏览器的安全策略
  协议 域名 端口 有一个不一致的时候就存在跨域

- cors
  cross origin resource share
  1. 一个标准，规定了一些http的首部字段，让服务器允许哪些网站可以访问。
  2. 规定，如果是非简单请求，浏览器会先发一个预检请求,从服务器端知道是允许跨域，如果允许才会发出正式请求
  3. 非简单请求 简单请求

- jsonp 原理
  1. script 标签可以跨域
  2. 加载进来的内容会被当做js执行
  3. 后端先获取到前端发出的callback，在callback里面插入自己想要返回的内容
  4. 前端拿到返回的内容当做js执行
  5. 预先定义好一个函数
  6. 缺点：只能get请求
  7. 写一个promise风格的jsonp函数
    jsonp(url,param = {}).then(res => {
        console.log(res)
    })

1. 一个全局的方法
2. 插入一个script标签，根据方法名param拼接url
3. 根据js的加载情况判断请求成功与否返回数据
4. script标签上面有事件

- iframe
  可以引入一个跨域的html
  1. 引入和后端接口同源的一个iframe
  2. 该iframe不存在跨域可以请求
  3. 和iframe通信postMessage  message

  同一个页面的里面的所有iframe共享window.name

  - server 后端
    koa-static 映射过 /url

  - static 前端
    static live-server
    前后端 通信 fe-iframe文件 收到后端的结果 middle 后端 static iframe

    window.name

    1. 上一步一样
    2. iframe 请求结果放在一个共享的window.name上面
    3. fe-iframe.html 得到请求的结果
    4. 请求完成后跳到一个第三方页面 执行定义在fe-iframe.html里面的回溯

- 代理
  webpack-dev-server 
  反向代理：live-server --proxy=/api:http://localhost:53451/api/
 live-server --proxy=/api:http://localhost:9090/api/
 live-server --proxy=/api:http://198.0.0.1:9090/api/
 拿到结果
 对于客户端来说最终请求的地方是未知的。
 正向代理：
 对于服务端来说客户端是未知的。