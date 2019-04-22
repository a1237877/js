// 对象 林 gaodeMap
const gooleMap = {
    show(){
        console.log('开始渲染GOOLEMAP地图');
    }
}
const baiduMap={
    // 同样方法名 为互换做准备
    show(){
        console.log('开始渲染百度地图');
    }

}
const gaodeMap={
    // 同样方法名 为互换做准备
    show(){
        console.log('开始渲染gaode地图');
    }

}
const sosoMap={
    // 同样方法名 为互换做准备
    show(){
        console.log('开始渲染soso地图');
    }

}
/**
 * 
 * @param {object} map 
 */
const renderMap = (map) =>{
    // 分支太多
    // if(e=== 'baidu'){
    //     baiduMap.show();
    // }else{
    // gooleMap.show();
    // }


    // if(map.show && typeof map.show === 'function'){
    //     map.show();
    // }

    if(map.show && map.show instanceof Function){    //判断是否是函数
        map.show();
    }
    


}
renderMap(baiduMap);
renderMap(gooleMap);
renderMap(sosoMap);

