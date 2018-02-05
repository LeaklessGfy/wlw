<template>
  <b-container>
    <b-row>
      <!-- FIRST -->
      <b-col>
        <app-wrestler
          :id="0"
          :wrestler="selectedWrestlers[0]"
          :onClick="chooseActive"
          :active="active === 0 ? true : false">
        </app-wrestler>
      </b-col>

      <!-- SECOND -->
      <b-col>
        <app-wrestler
          :id="1"
          :wrestler="selectedWrestlers[1]"
          :onClick="chooseActive"
          :active="active === 1 ? true : false"
        ></app-wrestler>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="text-center">
        <b-button v-on:click="play()">Play</b-button>
      </b-col>
    </b-row>

    <app-wrestler-list :wrestlers="wrestlers" :onClick="chooseWrestler"></app-wrestler-list>
  </b-container>
</template>

<script>
import chunk from "lodash/chunk";
import { getMode } from "mock/modes";
import WrestlerVue from "components/Wrestler/Wrestler.vue";
import WrestlerListVue from "components/Wrestler/WrestlerList.vue";

export default {
  data: () => ({
    active: -1
  }),
  methods: {
    chooseActive: function(id) {
      this.active = id;
    },
    chooseWrestler: function(wrestler) {
      if (this.active == -1) {
        return;
      }
      this.$store.commit("play/SELECT_WRESTLER", {
        id: this.active,
        wrestler
      });
    },
    play: function() {
      this.$router.push({
        name: "play-game",
        params: { mode: this.mode.id, w: "[]" }
      });
    }
  },
  computed: {
    mode() {
      return getMode(this.$route.params.mode);
    },
    wrestlers() {
      return chunk(this.$store.state.play.wrestlers, 6);
    },
    selectedWrestlers() {
      return this.$store.state.play.selectedWrestlers;
    }
  },
  components: {
    "app-wrestler": WrestlerVue,
    "app-wrestler-list": WrestlerListVue
  }
};
</script>
