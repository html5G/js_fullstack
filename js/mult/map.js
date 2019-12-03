// 对象  gaodeMap
const baiduMap = {
    //为互换做准备
    show() {
        console.log('开始渲染百度地图');
    }
}
const googleMap = {
    show(){
        console.log('开始渲染Google地图');
    }
}
const gaodeMap = {
    //为互换做准备
    show() {
        console.log('开始渲染高德地图');
    }
}
const sosoMap ={
        show() {
        console.log('开始渲染soso地图');
    }
}
/**
 * 
 * @param {Object} map 
 */
 const renderMap = (map) => {
    // map检测 
    if(map.show && map.show instanceof Function) {
       map.show();
     }
    
    //  if(type === 'baidu')
    //  baiduMap.show();
    //  else if (type === 'google')
    //  googleMap.show();
    //  else if (type === 'gaode')
    //  gaodeMap.show();
 }
 renderMap(baiduMap);
 renderMap(googleMap);
 renderMap(sosoMap)
 renderMap(gaodeMap);