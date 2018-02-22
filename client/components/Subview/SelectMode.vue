<template>
  <b-container class="mt-3">
    <b-row v-for="(row, i) in modes" :key="i">
      <b-col v-for="mode in row" cols="4" :key="mode.id">
        <app-mode :mode="mode" :onClick="onMode" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import chunk from "lodash/chunk";

export default {
  mounted: function() {
    this.$store.dispatch("api/fetchModes");
  },
  methods: {
    onMode: function(mode) {
      this.$store.commit("play/SET_MODE", {
        mode
      });
    }
  },
  computed: {
    modes() {
      return chunk(this.$store.state.api.modes, 4);
    }
  }
};
</script>
