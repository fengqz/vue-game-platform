import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
Vue.use(Vuex);
const state = {
  token: null,
  username: '',
  password: ''
}
const mutations = {
  [types.LOGIN]: (state, data) => {
    // localStorage.setItem('token', data)
    state.token = data
  },
  [types.USERNAME]: (state, data) => {
    localStorage.setItem('username', data)
    state.username = data
  }

}
const actions = {
  UserLogin({commit},data) {
    commit(types.LOGIN, data)
  },
  UserName({ commit }, data) {
    commit(types.USERNAME, data)
  }

}

export default new Vuex.Store({
  state,
  mutations,
  actions

})
