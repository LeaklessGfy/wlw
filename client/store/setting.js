export default {
  namespaced: true,
  state: {server: 'http://wlw-api.local', admin: true},
  mutations: {
    SET_SERVER(state, payload) {
      state.server = payload.server;
    }
  }
};
