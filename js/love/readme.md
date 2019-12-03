三角恋
 构造函数constructor
 prototype 原型
 实例 instance

 js没有类，只有对象，都是通过原型拿到的
 通过构造函数person 生成了person 这个实例，
 同时我们在person 的原型person.prototype定义了getName

 构造函数运行的 ，new Person（） this->新的实例，空对象person{}.name
 1. 任何对象都有_prototype _私有属性，这个对象的出处是哪？ ，实例和类之间没有血缘关系，_proto_
 2. 构造函数有prototype属性
 3. 原型对象上有constructor属性指向构造函数

 js 面向对象是基于原型的

 原型链