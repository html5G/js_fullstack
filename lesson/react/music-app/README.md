- Switch 只显示符合path的第一个组件
  不加SWitch符合path的所有组件

-  
  https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1562038623636&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1$jsonpCallback=callback

- setState
  1. 异步的
  2. 合并

- jsonp
  const OPTION = {
    param: 'jsonpCallback',
    prefix: 'callback'
 }
 ?jsonpCallback=xxx
 xxx可以固定死的
 jsonp jquery
 每次请求的callback xxx 都是不一样的 加上随机值 

- Lazyload
  监听原生的滚动
  css3 transfrom