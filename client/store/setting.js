export default {
  namespaced: true,
  state: {
    server: "http://localhost:3000",
    admin: true
  },
  mutations: {
    SET_SERVER(state, payload) {
      state.server = payload.server;
    }
  }
};
