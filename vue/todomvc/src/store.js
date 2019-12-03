import Vue from 'vue';
import Vuex from 'vuex';
// 启动应用状态管理
Vue.use(Vuex);

// 全局共享状态
const state = {
    count: 0
}
// state 要改，actions是交给你调用的，increment不能直接修改state.count，
//    state.count++ mutations
// 只有actions才可以触发同mutations改变，
// 只有mutations才可以修改state

// 直接修改状态
const mutations = {
    increment(state) {
        state.count++;
    }
}
const actions = {
    increment: ({ commit }) => commit('increment')
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})