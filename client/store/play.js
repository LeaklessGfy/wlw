const INITIAL = {
  turn: 0,
  viewer: "P1",
  active: "P1",
  targets: [],
  next: [],
  players: {},
  card: null,
  mode: null,
  state: 0
};

const makeOptions = data => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});

const fetchAPI = (url, data, callback) => {
  fetch(url, makeOptions(data))
    .then(r => r.json())
    .then(state => {
      if (state.error) {
        throw new Error(state.error);
      }

      callback(state);
    })
    .catch(e => alert(e));
};

export default {
  namespaced: true,
  state: Object.assign({}, INITIAL),
  mutations: {
    SET_VIEWER(state, payload) {
      state.viewer = payload.viewer;
    },
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
    SET_CARD(state, payload) {
      state.card = payload.card;
    },
    SET_TARGETS(state, payload) {
      state.targets = payload.targets;
    },
    ADD_TARGET(state, payload) {
      const targets = state.targets;
      targets.push(payload.target);
      state.targets = targets.slice();
    },
    RESET(state, payload) {
      Object.assign(state, INITIAL);
    },
    MERGE(state, payload) {
      Object.assign(state, payload);
    }
  },
  actions: {
    flow(ctx, opts) {
      const { setting, play } = ctx.rootState;
      const url = setting.server + "/states/flow";
      fetchAPI(url, Object.assign({}, play, opts), state => {
        ctx.commit("MERGE", state);
        if (state.state === -1) {
          //flow again for ia play
        }
      });
    }
  }
};
