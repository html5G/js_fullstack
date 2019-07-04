// 读 this.#StorageEvent.state.count
// 写 actions，mutations，getters
// vuex 你是什么时候都要，大项目离不开
mutations
唯一可以修改
state的地方
对状态的修改是否被允许的

- Vue 实现核心mvvm，其他的通过
   Vue.use() 插入进去
   读
     this.$store
     this.$router
   写

- data() 将会被state取代
   data只是自身状态的数据
   methods 改变状态的方法
