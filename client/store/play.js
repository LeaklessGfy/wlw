const INITIAL = {
  turn: 0,
  viewer: "P1",
  active: "P1",
  targets: [],
  next: [],
  players: {},
  card: null,
  mode: null
};

const makeOptions = data => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});

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
    RESET_PLAY(state, payload) {
      Object.assign(state, {
        turn: 0,
        targets: [],
        next: [],
        card: null
      });
    },
    SET_STATE(state, payload) {
      Object.assign(state, payload);
    }
  },
  actions: {
    distribute(ctx) {
      const state = ctx.rootState;

      fetch(state.setting.server + "/cards/distribute", makeOptions(state.play))
        .then(r => r.json())
        .then(state => ctx.commit("SET_STATE", state))
        .catch(e => alert(e));
    },
    play(ctx) {
      const state = ctx.rootState;

      fetch(state.setting.server + "/cards/play", makeOptions(state.play))
        .then(r => r.json())
        .then(state => ctx.commit("SET_STATE", state))
        .catch(e => alert(e));
    }
  }
};
