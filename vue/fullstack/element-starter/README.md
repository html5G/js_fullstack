大前端全栈开发思路

在前端vue 项目目录下，建一个server用来mvc就好了

- 前后端分离
  后端负责提供/api 在server目录下
  前端 src/
  后端就负责 API 服务

1. 后端在3000，未来等待ngnix 80 -> 3000
  /api api服务，等着前端调用   / vue打包好的dist 目录index.html readFile 返回
2. 前端在8080，vue-router vuex axios
3. 前后端连调，api数据 -> vue组件的data
4. 跨域（前端面试最重要的问题）
   domain 域名
   端口，cross domain
   前端不允许 安全问题
   前端考虑，页面上显示的东西要安全
   后端考虑，

- 前端
  book.douban.com
  www.douban.com
  domain、port、subdomain 都一样
  js同源机制，相同的源是值得依赖的
  前后端 8080:3000跨域
  不跨，fetch('/api/user/login') 404
  3000  /api/   proxy 代理
  /api/ 匹配
    target: http://localhost:3000/api,
    changOrigin: true
    发出去的请求也不跨域

  