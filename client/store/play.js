import modes from "mock/modes";
import wrestlers from "mock/wrestlers";

export default {
  namespaced: true,
  state: {
    modes: modes,
    mode: null,
    wrestlers: wrestlers,
    selected: []
  },
  mutations: {
    SELECT_MODE(state, payload) {
      state.mode = payload.mode;
    },
    SELECT_WRESTLER(state, payload) {
      const arr = state.selected;
      arr[payload.active] = payload.wrestler;
      state.selected = arr.slice();
    }
  },
  action: {}
};
