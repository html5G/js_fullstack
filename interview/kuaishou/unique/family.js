
function marry(man,woman) {
    woman.husban = man
    man.wife = woman
    return {
        father: man,
        month: woman
    }
}
let family = marry({
    name: 'John'
},{
    name: 'Ann'
})