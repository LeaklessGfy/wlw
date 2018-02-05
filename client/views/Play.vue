<template>
  <b-container class="mt-2">
    <template v-if="mode === null">
      <b-row v-for="(row, i) in modes" :key="i">
        <b-col v-for="mode in row" cols="4" :key="mode.id">
          <app-mode :mode="mode" :onClick="chooseMode"></app-mode>
        </b-col>
      </b-row>
    </template>
    <template v-else>
      <b-row>
        <b-col>
          <app-wrestler
            :id="0"
            :wrestler="selectedWrestlers[0]"
            :onClick="chooseActive"
            :active="active === 0 ? true : false">
          </app-wrestler>
        </b-col>
        <b-col class="text-center">
          <b-button href="#/" disabled>Play</b-button>
        </b-col>
        <b-col>
          <app-wrestler
            :id="1"
            :wrestler="selectedWrestlers[1]"
            :onClick="chooseActive"
            :active="active === 1 ? true : false"
          ></app-wrestler>
        </b-col>
      </b-row>
      <app-wrestler-list :wrestlers="wrestlers" :onClick="chooseWrestler"></app-wrestler-list>
    </template>
  </b-container>
</template>

<script>
import chunk from "lodash/chunk";
import ModeVue from "components/Mode/Mode.vue";
import WrestlerVue from "components/Wrestler/Wrestler.vue";
import WrestlerListVue from "components/Wrestler/WrestlerList.vue";

export default {
  data: () => ({
    mode: null,
    active: -1
  }),
  methods: {
    chooseMode: function(mode) {
      this.mode = mode;
    },
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
    }
  },
  computed: {
    modes() {
      return chunk(this.$store.state.play.modes, 4);
    },
    wrestlers() {
      return chunk(this.$store.state.play.wrestlers, 6);
    },
    selectedWrestlers() {
      return this.$store.state.play.selectedWrestlers;
    }
  },
  components: {
    "app-mode": ModeVue,
    "app-wrestler": WrestlerVue,
    "app-wrestler-list": WrestlerListVue
  }
};
</script>
