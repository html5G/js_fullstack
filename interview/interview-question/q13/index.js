let obj = {
    name: 'Yvette',
    age: 18,
    hobbies: ['reading','photography']
}
let obj2 = Object.assign({},obj)
let obj3 = {...obj}

obj.name = 'Jack'
obj.hobbies.push('coding')

console.log(obj)
console.log(obj2)
console.log(obj3)