- 组件状态，兄弟，父子，多余代码
  大型项目。多组件，多个跨路由的组件共享状态
  共享状态
- 状态的管理 协同 
  dispatch(action {type: '',payload:''}) -> reducer(无差别状态计算 switch case协同) -> state 

1. head body 两个函数组件，共享单一的全局状态树
2. 状态是全局可以随意被修改 
3. dispatch 使状态的改变可控，任何改变都可以在dispatch中找到源头 {type: '',payload}
4. 通知发生了状态改变，oldState newState，使用新的状态。 subscribe