import * as types from '../types'

const state = {
    showSidebar: true
}

// mutations 是修改state 里面的数据
const mutations = {
    [types.COM_SHOW_SIDE_BAR] (state,status) {
        state.showSidebar = status
    }
}

// 触发mutations的数据
const actions = {
    setShowSidebar({commit},status) {
        commit(types.COM_SHOW_SIDE_BAR,status)
    }
}

// 取数据
const getters = {
    showSidebar: state => state.showSidebar
}

export default {
    state,
    mutations,
    actions,
    getters
}