import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: 'login-layout',
  },
  mutations: {
    SET_LAYOUT(state, newLayout) {
      state.layout = newLayout;
    },
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async getUser({ commit }, user) {
      if (user) {
        commit('SET_USER', user);
      } else {
        commit('SET_USER', null);
      }
    },
  },
  modules: {
  },
});
