import modes from "mock/modes";
import wrestlers from "mock/wrestlers";

export default {
  namespaced: true,
  state: {
    modes: modes,
    wrestlers: wrestlers,
    selectedWrestlers: [{}, {}]
  },
  mutations: {
    SELECT_WRESTLER(state, payload) {
      const arr = state.selectedWrestlers;
      arr[payload.id] = payload.wrestler;
      state.selectedWrestlers = arr.slice();
    }
  },
  action: {}
};
