## why
  无状态

## cookie
 本地存储
 怎么来：
 1. js document.cookie 可读可写
 2. 服务端 通过 Set-Cookice 相应头设置 cookie
   内容：
     name：
     value：
     path： cookie 在哪个路径下生效
        /                  / 所有路径
        /user              / user user以及user下面的
        /user/abc          / user/abc  user/abc 以及下面的
     domain：
       httpOnly：有true/false之分  如果设置为true，就不能通过js获取cookie的值。
       maxAge: 在几秒之后 cookie 被删除。
       secure：安全 只会在https 协议下传输。
       koa：ms(毫秒)   js: s(秒)

    作用范围：
      domain + path 共同决定
      在什么域名路径下面生效
        浏览器检查存储的cookie，会发送给服务端，
        而且：http 传输报文的大小。
        放在cookie请求头里面发送。
    
    用途：
      状态管理（true）用户个性化设置（false）
      规定死的cookie

## session
  会话 
  靠后台语言自己实现的
  很多个用户产生产生很多个session

  userId
  sessionId 用户会话的时候，通过自己的sessionId查询自己的状态
  cookie： sessionId = id
