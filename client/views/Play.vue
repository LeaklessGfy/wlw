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
      :selected="selected"
      :wrestlers="wrestlers"
      :onActive="chooseActive"
      :onWrestler="chooseWrestler"
      :onPlay="play"
    />
    <app-play
      v-else
      :turn="0"
      :mode="mode"
      :wrestlers="selected"
    />
  </div>
</template>

<script>
import chunk from "lodash/chunk";
import { getMode } from "mock/modes";

export default {
  data: () => ({
    active: 0,
    ready: false
  }),
  methods: {
    chooseMode: function(mode) {
      this.$store.commit("play/SELECT_MODE", {
        mode
      });
    },
    chooseActive: function(active) {
      this.active = active;
    },
    chooseWrestler: function(wrestler) {
      this.$store.commit("play/SELECT_WRESTLER", {
        active: this.active,
        wrestler
      });
    },
    play: function() {
      if (this.selected.length < 2) {
        return;
      }
      this.ready = true;
    }
  },
  computed: {
    modes() {
      return chunk(this.$store.state.play.modes, 4);
    },
    mode() {
      return this.$store.state.play.mode;
    },
    wrestlers() {
      return chunk(this.$store.state.play.wrestlers, 6);
    },
    selected() {
      return this.$store.state.play.selected;
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
