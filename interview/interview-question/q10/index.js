
function Animal(name) {
    this.name = name
    this.sleep = function () {
        console.log(this.name + '777')
    }
}