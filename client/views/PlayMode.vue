<template>
  <b-container class="mt-2">
    <b-row v-for="(row, i) in modes" :key="i">
      <b-col v-for="mode in row" cols="4" :key="mode.id">
        <app-mode :mode="mode" :onClick="chooseMode"></app-mode>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import chunk from "lodash/chunk";
import ModeVue from "components/Mode/Mode.vue";

export default {
  methods: {
    chooseMode: function(mode) {
      this.$router.push({
        name: "play-wrestler",
        params: { mode: mode.id }
      });
    }
  },
  computed: {
    modes() {
      return chunk(this.$store.state.play.modes, 4);
    }
  },
  components: {
    "app-mode": ModeVue
  }
};
</script>
