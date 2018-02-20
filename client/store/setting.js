export default {
  namespaced: true,
  state: {
    server: "http://localhost:4000"
  },
  mutations: {
    SET_SERVER(state, payload) {
      state.server = payload.server;
    }
  }
};
