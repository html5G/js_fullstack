
// sleep(3000)
// console.log('hello world')
// const sleep = time => {
//     return new Promise((resolve,reject) => setTimeout(resolve,time))
// }
// sleep(3000).then(() => {
//     console.log('123')
// })

// function *sleepGenerator(time) {
//     yield new Promise((resolve,reject) => {
//         setTimeout(resolve,time)
//     })
//     console.log('1111')
// }
// sleepGenerator(3000).next().value.then(() => {
//     console.log('22222')
// })
// console.log(sleepGenerator().next().value.then(() => {
//     console.log('22222')
// }))


// function sleep(time) {
//     return new Promise(resolve => setTimeout(resolve,time))
// }
// async function output() {
//     let out = await sleep(2000)
//     console.log(1)
//     return out
// }
// output()


function sleep(callback, time) {
    if (typeof callback === 'function') {
        setTimeout(callback, time)
    }
}

sleep(function () {
    console.log('555')
}, 1000)