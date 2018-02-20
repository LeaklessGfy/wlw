const INITIAL = {
  turn: 0,
  viewer: "P1",
  active: "P1",
  targets: [],
  next: [],
  players: {},
  card: null,
  mode: null,
  modes: [],
  wrestlers: []
};

export default {
  namespaced: true,
  state: Object.assign({}, INITIAL),
  mutations: {
    SET_MODE(state, payload) {
      state.mode = payload.mode;
    },
    SET_ACTIVE(state, payload) {
      state.active = payload.active;
    },
    SET_PLAYER(state, payload) {
      state.players = Object.assign({}, state.players, {
        [payload.active]: payload.wrestler
      });
    },
    SET_CARD(state, payload) {
      state.card = payload.card;
    },
    SET_TARGETS(state, payload) {
      state.targets = payload.targets;
    },
    ADD_TARGET(state, payload) {
      const targets = state.targets;
      targets.push(payload.target);
      state.targets = targets.slice();
    },
    RESET(state, payload) {
      Object.assign(state, INITIAL);
    },
    SET_MODES(state, payload) {
      state.modes = payload.modes;
    },
    SET_WRESTLERS(state, payload) {
      state.wrestlers = payload.wrestlers;
    }
  },
  actions: {
    fetchModes(ctx) {
      const state = ctx.rootState.setting;
      fetch(state.server + "/modes")
        .then(r => r.json())
        .then(modes => ctx.commit("SET_MODES", { modes }));
    },
    fetchWrestlers(ctx) {
      const state = ctx.rootState.setting;
      fetch(state.server + "/wrestlers")
        .then(r => r.json())
        .then(wrestlers => ctx.commit("SET_WRESTLERS", { wrestlers }));
    }
  }
};
