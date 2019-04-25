函数的节流与防抖

阿里面试第一题
-搜索建议
 google suggest
 input value => ajax
 有问题的，触发太频繁
  分词 灭霸电蚊液
  keyup 没有必要每次都去触发ajax 浪费性能
  过滤一些无效的请求
  world word JS 打完一个单词后再去搜索


  防抖的关键
  频繁输入时，怎么减少请求呢
  debounce(ajax,500) 生成一个函数 控制执行  停止输入时，执行一次  打完一个单词后会有意识的停一下
  setTimeout delay 之后一定会执行一次
  在规定时间内  会被clear掉
  clearTimeOut(func.id);
  func.id = setTimeout(funcion(){
      func();
  },delay);