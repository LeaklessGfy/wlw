import modes from "mock/modes";
import wrestlers from "mock/wrestlers";

export default {
  namespaced: true,
  state: {
    turn: 0,
    viewer: "P1",
    active: "",
    targets: [],
    next: [],
    players: {},
    card: null,
    mode: null,
    modes: modes,
    wrestlers: wrestlers
  },
  mutations: {
    SELECT_MODE(state, payload) {
      state.mode = payload.mode;
    },
    ADD_PLAYER(state, payload) {
      const players = Object.assign({}, state.players, {
        [payload.key]: payload.wrestler
      });
    }
  },
  action: {}
};
