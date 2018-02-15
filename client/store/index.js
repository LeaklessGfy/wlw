import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Play from "./play";

Vue.use(Vuex);

const state = {
  count: 0
};

const mutations = {
  INCREMENT(state) {
    state.count++;
  },
  DECREMENT(state) {
    state.count--;
  }
};

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit("INCREMENT");
    }, 200);
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    play: Play
  },
  plugins: [createPersistedState()]
});

export default store;
