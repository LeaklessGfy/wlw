export default {
  namespaced: true,
  state: {
    modalCard: null
  },
  mutations: {
    SET_MODAL_CARD(state, payload) {
      state.modalCard = payload.modalCard;
    }
  }
};
