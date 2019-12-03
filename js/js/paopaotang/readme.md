- 构造函数
 大写字母的函数 构造函数
 一个函数首字母-大写约束，区别于普通函数运行的方式 new ，构造函数 
 js 函数跟其他语言不一样，函数一定会存在一个this ，指针。
 函数是js里的一等对象，js除了基本数据类型之外，都是对象object，函数是可以被运行的对象。
 this 指向实例化后的对象。

 - 函数有多种运行方式
 player（） 普通方式，
 new player（） 作为构造函数constructor被运行，会有欧方辉新对象实例，
 构造函数是类，
 function Person（）{}

 - 函数是一对象，可以被执行的对象

 this 常在借助他来构造新的对象
 var player1 = new person（）
 this=>player1 person{}

 - new的过程
 this 空对象person{}
 person（）函数是一个构造函数，
 this.name = name
