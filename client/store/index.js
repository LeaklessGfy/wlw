import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Api from "./api";
import Play from "./play";
import Setting from "./setting";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    api: Api,
    play: Play,
    setting: Setting
  }
  //plugins: [createPersistedState()]
});

export default store;
