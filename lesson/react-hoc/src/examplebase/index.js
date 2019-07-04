
// defineProperty(obj,key,{value: ''})
// descripttor 拿到了 add 这个方法的descriptor
// Object.defineProperty(Base, 'add', {
//     value: () => {},
//     // ...
// })
// function log(target,name,descriptor) {
//     const method = descriptor.value;
//     descriptor.value = function (...args) {
//         console.log('log type: add')
//         return method(...args);
//     }
// }
function log(logType) {
    return function (target,name,descriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            console.log('log type: ' + logType)
            return method(...args);
        }
    }
}
// 修饰符 是个函数
// @log log是一个函数
// @log('add') @log('divide') 也得是一个函数
class Base {
    @log('add')
    add(a,b) {
        // console.log('log type add:')
        return a + b;
    }
    @log('divide')
    divide(a,b) {
        return a/b;
    }
}
// 加日志
// 有了 更好 没有也行的 装饰器
const base = new Base();
console.log('add',base.add(1,2));
console.log('divide',base.divide(4 , 2));
export default Base;