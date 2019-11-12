import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    getUserStatus: (state) => {
      return state.user
    },
    setUserStatus: (state, obj) => {
      state.user = obj
    }
  }
})

export default store
