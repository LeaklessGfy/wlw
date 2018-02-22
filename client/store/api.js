const INITIAL = {
  wrestlers: [],
  modes: []
};

export default {
  namespaced: true,
  state: INITIAL,
  mutations: {
    SET_MODES(state, payload) {
      state.modes = payload.modes;
    },
    SET_WRESTLERS(state, payload) {
      state.wrestlers = payload.wrestlers;
    },
    RESET(state, payload) {
      Object.assign(state, INITIAL);
    }
  },
  actions: {
    fetchModes(ctx) {
      const setting = ctx.rootState.setting;
      fetch(setting.server + "/modes")
        .then(r => r.json())
        .then(modes => ctx.commit("SET_MODES", { modes }));
    },
    fetchWrestlers(ctx) {
      const setting = ctx.rootState.setting;
      fetch(setting.server + "/wrestlers")
        .then(r => r.json())
        .then(wrestlers => ctx.commit("SET_WRESTLERS", { wrestlers }));
    }
  }
};
