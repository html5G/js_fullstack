// 1. 
// function uniq(arr) {
//     return [...new Set(arr)].sort()
// }
// console.log(uniq([0, 2, 1, 2, 4, 3]));

// 2. 
// function uniq(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (result.indexOf(arr[i]) === -1) {
//             result.push(arr[i])
//         }
//     }
//     return result.sort()
// }
// console.log(uniq([0, 2, 1, 2, 4, 3]))

// 3
// function uniq(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i])
//         }
//     }
//     return result.sort()
// }
// console.log(uniq([0, 2, 1, 2, 4, 3]))

// 4.
// function uniq(arr) {
//     let map = new Map()
//     let result = new Array()
//     for (let i = 0; i < arr.length; i++) {
//         if (map.has(arr[i])) {
//            map.set(arr[i],true)
//         } else {
//             map.set(arr[i],false)
//             result.push(arr[i])
//         }
//     }
//     return result.sort()
// }
// console.log(uniq([0, 2, 1, 2, 4, 3]))

// 5.
function uniq(arr) {
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]).sort()
}
console.log(uniq([0, 2, 1, 2, 4, 3]))