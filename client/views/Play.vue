<template>
  <div class="page">
    <app-select-mode 
      v-if="mode === null"
      :modes="modes"
      :onMode="chooseMode"
    />
    <app-select-wrestler
      v-else-if="!ready"
      :active="active"
      :players="players"
      :wrestlers="wrestlers"
      :onActive="chooseActive"
      :onWrestler="chooseWrestler"
      :onPlay="play"
      :onBack="back"
    />
    <app-play
      v-else
      :turn="turn"
      :viewer="viewer"
      :active="active"
      :targets="targets"
      :players="players"
      :card="card"
      :mode="mode"
      :onBack="back"
    />
  </div>
</template>

<script>
import chunk from "lodash/chunk";
import { getMode } from "mock/modes";

export default {
  data: () => ({
    ready: false
  }),
  methods: {
    chooseMode: function(mode) {
      this.$store.commit("play/SET_MODE", {
        mode
      });
    },
    chooseActive: function(active) {
      this.$store.commit("play/SET_ACTIVE", {
        active
      });
    },
    chooseWrestler: function(wrestler) {
      this.$store.commit("play/SET_PLAYER", {
        active: this.active,
        wrestler
      });
    },
    play: function() {
      this.ready = true;
    },
    back: function() {
      this.$store.commit("play/RESET");
    }
  },
  computed: {
    viewer() {
      return this.$store.state.play.viewer;
    },
    turn() {
      return this.$store.state.play.turn;
    },
    active() {
      return this.$store.state.play.active;
    },
    targets() {
      return this.$store.state.play.targets;
    },
    next() {
      return this.$store.state.play.next;
    },
    players() {
      return this.$store.state.play.players;
    },
    card() {
      return this.$store.state.play.card;
    },
    mode() {
      return this.$store.state.play.mode;
    },
    modes() {
      return chunk(this.$store.state.play.modes, 4);
    },
    wrestlers() {
      return chunk(this.$store.state.play.wrestlers, 6);
    }
  }
};
</script>

<style>
body {
  background: #222222 !important;
}
.ui {
  height: 130px;
  border-top: 2px solid #292b2c;
  background: #000;
}
</style>
