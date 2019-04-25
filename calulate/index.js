// s  5个月
// a  3个月
// b  2个月
// c  1个月
// d  走人
// function caculate(level,salary){
    // if(level==='s'){
    //     return salary*5
    // }else if(level==='a'){
    //     return salary*3
    // }else if(level==='b'){
    //     return salary*2
    // }else if(level==='d'){
    //     return salary*1
    // }else{
    //     return 0;
        
    // }
    // 分支？

    //level key  计算函数？
    let stratigies = {
        's': function(salary){
            return salary*5;
        },
        'a':function(salary){
            return salary*3;
        },
        'b':function(){
            return salary*2
        },
        'c':function(){
            return salary*1
        },
        'd':function(){
            return 0;
        }


    }

function caculate(level,salary){
    return stratigies[level](salary);
}
console.log(caculate('s',10000));