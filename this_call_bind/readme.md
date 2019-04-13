阮一峰的继承
继承的方法
1.用apply  call 来实现子类继承父类   先继承构造函数的属性
构造函数被 new 的方式运行    this指向实例对象
   父类.apply (this,argument)    若用call (this,...argument) 
   其中argument 为参数传递的数组  argument = age,name,color
-call apply
  手动指定函数内部this指向
  参数用法不一样  偏向于用apply   可以直接用argument数组作为参数

-this 函数内部的this
由运行方式决定，而非生成时决定的  有以下方式
1.普通函数
2.对象的方法
3.call apply 指定
4.构造函数
5.bind 指定this 返回新的函数
6.事件回调函数内部  this 指向事件对象