- crossorigin
  Link img script 用于可以跨域的标签上
  代表要和后端协商跨域，
  1. anonymous 在请求过程中加上Origin属性
  如果后端未设置Access-control-allow-origin，图片就会出错
  script标签中，如果没有设置CORS，跨域js发生错误，将会向window.onerror提供很少量的信息，通过crossorigin可以得到详细信息。
  2. use-credentials
    请求时带上cookie

- image 标签
  1. 通过图片src上报日志，不浪费ajax资源
     204 NO Content，只需要知道返回之后成功，省掉多余的数据传输

- localStorage
  同一个域名共享，localStorage 有大小限制，
  扩容
  h5.u51.com/
  iframe