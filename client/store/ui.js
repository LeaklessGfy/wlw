export default {
  namespaced: true,
  state: {
    modalCard: false,
    modalWinner: false,
    disabled: []
  },
  mutations: {
    SET_MODAL_CARD(state, payload) {
      state.modalCard = payload.modalCard;
    },
    SET_MODAL_WINNER(state, payload) {
      state.modalWinner = payload.modalWinner;
    },
    SET_DISABLED(state, payload) {
      state.disabled = payload.disabled;
    },
    RESET(state, payload) {
      state.modalCard = false;
      state.modalWinner = false;
      state.disabled = [];
    }
  }
};
