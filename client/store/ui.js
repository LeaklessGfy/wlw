export default {
  namespaced: true,
  state: {
    modalCard: null,
    disabled: []
  },
  mutations: {
    SET_MODAL_CARD(state, payload) {
      state.modalCard = payload.modalCard;
    },
    SET_DISABLED(state, payload) {
      state.disabled = payload.disabled;
    }
  }
};
