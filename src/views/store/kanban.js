import * as api from '../api'
export default {
  namespaced: true,
  mutations: {
    SET_LIST (state, payload) {
      state.list =  payload
    }
  },
  actions: {
    FETCH ({commit, state, rootState}, route) {
      return api.kanban.getList({
      }).then((res) => {
        if (res.data.success) {
          commit('SET_LIST', res.data.data)
          return res.data.data
        }
      })
    },
  }
}