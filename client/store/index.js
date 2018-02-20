import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Play from "./play";
import Setting from "./setting";

Vue.use(Vuex);

const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit("INCREMENT");
    }, 200);
  }
};

const store = new Vuex.Store({
  modules: {
    play: Play,
    setting: Setting
  },
  plugins: [createPersistedState()]
});

export default store;
