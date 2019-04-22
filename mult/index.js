// 缓存计算结果 不要重复计算
// 计算了的保存   哪里？ 方式？
let cache = {};
// key String  <=  arguments 类数组
function mult(){
    // 参数数量是不定的
    // 方法1：用arguments
    let a = 1;
    // args 相关，数组 => string key
    let key = Array.prototype.join.call(arguments,',')
    if(cache[key]){
        console.log('从缓存中获取');
        return cache[key];
    }
   
    for(var i =0,l=arguments.length;i<l;i++){
        a = a*arguments[i];
    }
    cache[key] = a;
    return a;
}
     // 方法2：  ...args
// function mult(...args){
//     let a = 1;
   
//     for(var i =0,l=args.length;i<l;i++){
//         a = a*args[i];
//     }
//     return a;

// }
console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));