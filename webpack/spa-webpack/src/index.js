import { sync } from './commponents/sync/index';
// document.getElementById('app').innerHTML = '入口文件';

document.getElementById('btn').addEventListener('click',function() {
    //
    import(/* webpackChunkName: 'async' */ './commponents/async/index')
     .then(_ => {
         _.default.init();
     })
})
sync();