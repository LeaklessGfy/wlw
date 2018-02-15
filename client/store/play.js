import modes from "mock/modes";
import wrestlers from "mock/wrestlers";

const INITIAL = {
  turn: 0,
  viewer: "P1",
  active: "P1",
  targets: [],
  next: [],
  players: {},
  card: null,
  mode: null,
  modes: modes,
  wrestlers: wrestlers
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
    RESET(state, payload) {
      Object.assign(state, INITIAL);
    }
  },
  action: {}
};
