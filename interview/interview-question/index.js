
// function Person(name) {
//     this.name = name
// }

// let p = new Person('wn')
// // console.log(p.__proto__)  // Person {}
// // console.log(Person.__proto__)  //Function

// var foo = {},
//     F = function() {}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'

// console.log(foo.a)  // valA
// console.log(foo.b)  //undefined
// console.log(F.a)   // valA
// console.log(F.b)   // valB

// function Person(name) {
//     this.name = name
//     return 55
// }
// let p = new Person('wn')
// console.log(p)
// // 构造函数不需要返回值，使用new来创建时，
// // 如果return的是对象，返回的也会是对象，如果不是对象，会忽略返回值


// /// let 每次循环生成一个封闭得出块级作用域和setTimeout绑定
// // ，var每次循环会覆盖掉上一次的作用域

// // for in 迭代和for of 有什么区别？ --->
//    for in
//    ①for in index是索引为字符串型数字，不能进行几何运算，
//    ② for in 遍历的顺序有可能不是按照实际数组的内部顺序，
//    ③ 使用for in 会遍历数组所有的可枚举属性，包括原型，
//     for in 更适合遍历对象，
//    for of
//    for in遍历的是数组的索引（键名），而for of 遍历的是数组的元素
//    for of遍历的只是数组的元素，而不包括数组的原型属性和索引
// Array.prototype.method = function() {
//     console.log("wn")
 // }
// var myArray = [1,2,3,4,5,6,7]
// myArray.name = '11'
// for (let index in myArray) {
//     console.log(myArray[index])
// }

// let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
// // let oArr = [1,2,3,4,5,6,7,3,2,8]
// function outputArr(arr) {
//     var res = []
//     for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             res = res.concat(outputArr(arr[i]))
//         } 
//         else {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(outputArr(gArr))

let gArr = [1,[2,3],4,5,[6,7,[3,2,8]]]
function outputArr(arr) {
    return arr.reduce(function(pre,item) {
        return pre.concat(Array.isArray(item) ? outputArr(item) : item)
    },[])
}
console.log(outputArr(gArr))