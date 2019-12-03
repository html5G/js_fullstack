// 玩家1 玩家2 玩家n
// object 类
//jSON object 难以完成此job
// 玩家类 es5 没有class 关键字
//大写字母的函数 构造函数
//一个函数首字母-大写约束，区别于普通函数运行的方式 new ，构造函数 
function Player(name){
    //js 函数跟其他语言不一样，函数一定会存在一个this ，指针。
    // 函数是js里的一等对象，js除了基本数据类型之外，都是对象object，函数是可以被运行的对象。
    //this 指向实例化后的对象
    console.log(this);
    this.name =name;
    this.enemy = null;
}
player.prototype.win = function(){
    console.log(tihs.name+"win");
}
player.prototype.lose = function(){
    console.log(tihs.name+"lose");
}
//将类实例化 类是一个抽象的概念，对象可以new 出来
//上线得到过程
var Player1 = new Player("皮蛋");
console.log(Player1.name+"上线了");
var Player2 = new Player("小怪");
console.log(Player2.name+"上线了");
//成为对象的过程
Player1.enemy = player2;
Player2.enemy = Player1;

//游戏的过程
Player1.win();
player.lose();

//console.log(Player1.name);

// console.log(Player2.name);
