<template>
  <div class="page">
    <app-select-mode 
      v-if="mode === null"
      :modes="modes"
      :onMode="chooseMode"
    />
    <app-select-wrestler
      v-else-if="!ready"
      :active="ptr"
      :selected="selected"
      :wrestlers="wrestlers"
      :onActive="choosePtr"
      :onWrestler="chooseWrestler"
      :onPlay="play"
    />
    <app-play
      v-else
      :turn="0"
      :active="active"
      :targets="targets"
      :players="players"
      :card="card"
      :mode="mode"
    />
  </div>
</template>

<script>
import chunk from "lodash/chunk";
import { getMode } from "mock/modes";

export default {
  data: () => ({
    ptr: 0,
    ready: false,
    selected: []
  }),
  methods: {
    chooseMode: function(mode) {
      this.$store.commit("play/SELECT_MODE", {
        mode
      });
    },
    choosePtr: function(ptr) {
      this.ptr = ptr;
    },
    chooseWrestler: function(wrestler) {
      const selected = this.selected;
      selected[this.active] = wrestler;
      this.selected = selected.slice();
    },
    play: function() {
      if (this.selected.length < 2) {
        return;
      }
      this.$store.commit("play/ADD_PLAYER", {
        P1: this.selected[0],
        CPU: this.selected[1]
      });
      this.ready = true;
    }
  },
  computed: {
    modes() {
      return chunk(this.$store.state.play.modes, 4);
    },
    wrestlers() {
      return chunk(this.$store.state.play.wrestlers, 6);
    },
    active() {},
    targets() {},
    players() {},
    card() {},
    mode() {
      return this.$store.state.play.mode;
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
