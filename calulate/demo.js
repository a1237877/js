// 面向对象的世界，创建很多对象，策略对象
// 实现了同样的接口  caculate  互换策略  策略模式
var Bounce = function(salary){
    this.salary = salary

}
var PerformanceS = function(){
    
}
PerformanceS.prototype.caculate = function(salary){
    return salary*5;
}

var PerformanceA = function(){
    
}
PerformanceA.prototype.caculate = function(salary){
    return salary*3;
}

var PerformanceB= function(){
    
}
PerformanceB.prototype.caculate = function(salary){
    return salary*2;
}
var PerformanceC = function(){
    
}
PerformanceC.prototype.caculate = function(salary){
    return salary*1;
}

Bounce.prototype.setStrategy = function(strategy){
    this.strategy = strategy;
}
Bounce.prototype.getBounce = function(){
    return this.strategy.caculate(this.salary);
}
const bounce = new Bounce(10000);
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce());
const bounce2 = new Bounce(4000);
bounce2.setStrategy(new PerformanceA());
console.log(bounce2.getBounce())