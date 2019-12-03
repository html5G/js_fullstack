## static 
koa-staic
为什么要配置。
静态资源：图片 html css js
不会随着服务运行改变内容。
assets 资源 

## path
path.join 将路径的各个部分链接起来 处理了各个平台的分割符号 windows: \  类unix  / 

## formidable
fields 非[type="file"] 内容都会到 
files [type="file"]

## 静态资源服务
 双击打开：
 file://xxxxx 本地文件读取
 服务器：
 http://locahost:9090/
 <!-- 访问图片的时候，发一个请求 -->
 html 里面的引入的图片 js css 都会发出一个请求，然后这些都是静态资源，
   所以url和服务器磁盘路径一一对应。
   1. 有index1.html 的时候 自动打开
   2. 没有的话，就会列出所有文件夹
   用koa-static的作用就是 在html里面正确的引入 你指定目录下面的资源

   
 处理 static 目录下的资源映射为请求路径
 /static/1.png 返回1.png的内容
 /static/2.png 返回2.png的内容
 (koa-static)

业内擅长静态资源的服务器：Nginx