// 玩家1 玩家2 。。。。
// object  类 
// JSON object 难以完成job
// 构建玩家类   es5 没有class 关键字
//大写首字母的函数  叫做构造函数
//函数可以构建类
//一个函数首字母大写约束，区别于普通函数 运行的方式为new, 这个函数叫做构造函数
//函数是JS里的一等对象，除了基本数据类型外，都是对象。函数是可以背运行的对象
function Player(name)
{
   // js函数跟其他语言不一样，函数一定会存在一个this，指针，总会指向点什么
    
    console.log(this);   //this 指向的是空对象
    this.name=name;
    this.enemy=null;
}
//prototype 用来定义属性
Player.prototype.win=function(){
    console.log(this.name +"win");
}
Player.prototype.lose=function(){
    console.log(this.name +"lose");
}
//将类实际化  类抽象的概念 ，对象可以new出来
//考题：什么是new?
// 孕育爱情
// this指向实例化后的对象  （player）

var player1=new Player("皮蛋");
console.log(player1.name +"上线了");
var player2=new Player("小乖");
console.log(player2.name +"上线了");
player1.enemy=player2;
player2.enemy=player1;
//成为对手的过程 来一把
//游戏的过程
player1.win();  //对象作为属性被调用
player2.lose();
// console.log(player1.name);

// console.log(player2.name);