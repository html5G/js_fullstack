const a = {
    b: 1
}
function b() {
    console.log("a")
}
function bindData() {
    Object.keys(a).map(key => {
        let v = a[key]
        Object.defineProperty(a,key,{
            get() {
                console.log('读取a的值')
                return v
            },
            set(newA) {
                v = newA
                b()
            }
        })
    })
}
bindData()
a.b = 2
console.log(a.b)