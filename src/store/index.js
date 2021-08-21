import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: 'login-layout',
    user: {},
    toneladas: 0,
    points: 0,
  },
  mutations: {
    SET_LAYOUT(state, newLayout) {
      state.layout = newLayout;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    ADD_HUELLA_POINTS(state, value) {
      state.points += value;
    },
    REMOVE_HUELLA_POINTS(state, value) {
      state.points -= value;
    },
    SET_TONELADAS(state, value) {
      state.toneladas = value;
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
