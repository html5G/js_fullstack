函数的节流与防抖

阿里js面试第一题
- 搜索建议
 Google suggest
 input value =>  ajax
 有问题的。
 分词
 keyup 没有必要每次都去触发ajax 太浪费性能了
 过滤一些无效的请求，打完一个单词再去搜索
 js 打完一个单词后再去搜索

- 防抖的关键
 频繁输入时，怎么减少请求呢？
 debounce(ajax,500) 生成一个函数，控制执行，停止输入时，执行一次，打完一个单词时   候会有意识的停一下。
 setTimeout delay之后一定会执行一次。
 在规定时间内呢？被clear掉。
 clearTimeout(func.id);
 func.id = setTimeout(function() {
     func();
 },delay);
 句柄，不重复的数字，func 函数是对象 id属性 前一次加了一个setTimeout 下一次清除