- q1.js全局执行创建了两个东西： 全局对象和this关键字
  new 实现原理：
    1. 创建一个空对象，构造函数中的this指向这个空对象
    2. 这个新对象被执行[原型]连接
    3. 执行这个构造函数，属性和方法添加this引用的对象中
    4. 如果构造函数没有返回其他对象，那么就返回这个this，即创建的新对象，否则，返回构造函数中的返回对象

- q4 闭包
  闭包的原理：有权限访问其他函数的作用域的函数
  1. 阻止作用域被js垃圾回收
  2. 创建私有变量
  3. 创建块级作用域

- q5 数组去重
  Set typeOf includes map reduce

  click在ios手机上有300ms延迟，原因与解决方法
    1. <meta>

- q11 任务列表
  marcotask(宏观任务)：
    setTimeout  setInterval  requestAnimationFrame  HTML的解析  js的主线程
  mircotask(微观任务)
    promise  mutation.oberver  process.nextTick
    
  script(主程序代码) --> process.nextTick  -->  promise  --> setTimeout -->
    setInterval --> setImmediate --> I/O --> UI rendeing
  
- q12 浏览器的重绘和回旋
  浏览器渲染页面的过程
    1. 解析HTML，生成DOM树，解析CSS，生成CSSOM树
    2. 将DOM树和CSSOM树结合生成render树
    3. 回流： 根据生成的render树进行回流，得到节点的几何信息
    4. 重绘： 根据render树和回流得到的信息，得到节点的绝对像素
    5. 将像素发给GPU，展示在页面上
  
  vue子组件能否修改接收到的props里面的值
    不能  为了保证数据的单向流动，便于数据的追踪，避免数据混乱