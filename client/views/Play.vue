<template>
  <div class="page">
    <app-select-mode 
      v-if="mode === null"
      :modes="modes"
      :onMode="chooseMode"
    />
    <app-select-wrestler
      v-else-if="selected.length < 2"
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
      :wrestlers="selected"
    />
  </div>
</template>

<script>
import chunk from "lodash/chunk";
import { getMode } from "mock/modes";

export default {
  data: () => ({
    active: 0
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
    play: function() {}
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
