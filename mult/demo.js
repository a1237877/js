// 全局变量太多  cache只为mult服务    空间的污染
// 函数里面的变量会运行后就消失
// const mult = ()=>{
//     const cache = {};

// }
// 所以要用闭包
const mult=(function(){
    const cache ={};
    return function(...args){  //重新return 一个函数
        let key = Array.prototype.join.call(args,',');
        if(key in cache){     //判断 key 是否在 cache 存在
            return cache[key]

        }
        let a = 1;
        for(let i = 0,l = args.length;i<l;i++){
            a=a*args[i];
            
        }
        cache[key] = a;
        return a;

    }
})()
console.log(mult(1,2,3));
