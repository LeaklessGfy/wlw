const INITIAL = {
  turn: 0,
  viewer: "P1",
  active: "P1",
  targets: [],
  next: [],
  players: {},
  card: null,
  mode: null,
  records: []
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
      state.winner = null;
    },
    MERGE(state, payload) {
      Object.assign(state, payload);
    }
  },
  actions: {
    newTurn(ctx) {
      const { setting, play } = ctx.rootState;
      const url = setting.server + "/turns/new";
      fetchAPI(url, play, state => {
        ctx.commit("MERGE", state);
        if (state.active !== play.viewer) {
          const action = state.card !== null ? "play" : "newTurn";
          setTimeout(() => ctx.dispatch(action), 1000);
        }
      });
    },
    play(ctx) {
      const { setting, play } = ctx.rootState;
      const url = setting.server + "/cards/play";

      fetchAPI(url, play, state => {
        ctx.commit("ui/SET_MODAL_CARD", { modalCard: true }, { root: true });
        setTimeout(() => {
          ctx.commit("ui/SET_MODAL_CARD", { modalCard: false }, { root: true });
          ctx.commit("MERGE", state);
          if (state.winner) {
            ctx.commit(
              "ui/SET_MODAL_WINNER",
              { modalWinner: true },
              { root: true }
            );
          }
        }, 900);
        if (!state.winner && state.active !== play.viewer) {
          const action = state.card !== null ? "play" : "newTurn";
          setTimeout(() => ctx.dispatch(action), 1900);
        }
      });
    }
  }
};
