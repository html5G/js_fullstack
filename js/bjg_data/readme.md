一万条数据，要插入到网页中，怎么做？
DOM 

- 内存开销最大的在动态DOM
 DOM开销是最耗内存的
 createElement 
 coloneNode 节点克隆

- innerHTML
 10000条DOM显示是负担
 延迟加载用于图片上，
 分屏加载html
 浏览器绘制html 重绘和重排 导致网页卡顿

- 不能一下搞定，分屏加载
 - 数据分页 page 上一页的数据 当前页的数据 下一页的数据
   前端自主分页
 - 防抖 + onscroll？
   跟onReachBottom 一样
   当前数据，超出了视窗 viewport
   
 