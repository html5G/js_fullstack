- html2canvas 因为移动端网页分享，小程序 不能直接分享到朋友圈，
 将整个网页或者一部分网页转成canvas。
 
 html2canvas(dom,{
     onerendered:function(canvas) {
        显示，css
     }
 })

- svg 是图片
 假如他能将dom 画在内部的话
 foreignObject svg=>html

- getComputedStyle(dom,null)
 任何结点的CSS属性值都能拿到