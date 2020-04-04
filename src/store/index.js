import Vue from 'vue'
function createStore ({ state, mutations }) {
  return {
    state: Vue.observable(state),
    commit (key, ...args) {
      mutations[key](state, ...args)
    }
  }
}
const store = createStore({
  state: { query: '' },
  mutations: {
    search (state, query) {
      state.query = query
    }
  }
})

export default store
