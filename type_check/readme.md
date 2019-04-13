类型 typeof
复杂数据类型 object
Array 数组是可遍历的对象
Function 函数是可运行的对象
JSON Object 是可枚举的对象 for(key in)

typeof 半吊子 typeof[] 没有办法跟 json {} 区分开来
有一个办法可以区分 Array  JSON Object

1.用对象字面量来做面向对象 区别于原型式的 它没有被实例化的需要 Type. 将在程序中就做类型检测
var Type={}; 不是用来装数据，用来组织代码
2.for 来一次性的加完 ，同步异步的问题，
所以使用闭包来将type 作用域封闭起来，
使用立即执行函数，也会同步执行，类型检测函数的定义，因为函数嵌套，形成闭包
当函数再被调用时（异步的），会找到定义时刻的type
3.Object.prototype.toString.call(obj)
Object 祖先 顶级对象 函数才有prototype属性
原型上有这样的tostring方法 解决typeof的尴尬

Object.prototype.toString()
返回[object Object]
Object.prototype.toString.call([])
返回[object Array]
Object.prototype.toString.call(123)
[object Number]


