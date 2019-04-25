兼容性
scroll-behavior : smooth    兼容性不行

chrome 支持css 但是其他主流浏览器怎么办  scroll-behavior 失效
JS写  

scroll-behavior : smooth  现在可以开了 
ie 不支持   所以要兼容 hack    ie 用js  window.scrollTo(0,1/8)
requestAnimationFrame(递归函数)  内置函数

用谷歌浏览器不用执行js代码  所以要
浏览器判断  必考点
navigator.userAgent.indexOf('Chrome') !==-1
