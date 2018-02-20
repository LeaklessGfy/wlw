<template>
  <b-container class="mt-3">
    <!-- HEADER -->
    <b-row>
      <b-col>
        <b-button v-on:click="onBack">Back</b-button>
      </b-col>
    </b-row>

    <!-- WRESTLERS -->
    <b-row>
      <b-col>
        <app-wrestler
          :index="key1"
          :wrestler="players[key1] ? players[key1] : null"
          :active="active === key1 ? true : false"
          :onClick="onActive"
        />
      </b-col>
      <b-col>
        <app-wrestler
          :index="key2"
          :wrestler="players[key2] ? players[key2] : null"
          :active="active === key2 ? true : false"
          :onClick="onActive"
        />
      </b-col>
    </b-row>

    <!-- PLAY -->
    <b-row class="mt-2">
      <b-col class="text-center">
        <b-button :disabled="disabledPlay()" variant="success" v-on:click="onPlay()">Play</b-button>
      </b-col>
    </b-row>

    <!-- LIST -->
    <app-wrestler-list :wrestlers="wrestlers" :onClick="onWrestler" />
  </b-container>
</template>

<script>
import chunk from "lodash/chunk";

export default {
  props: {
    onPlay: { type: Function, required: true },
    onBack: { type: Function, required: true }
  },
  data: () => ({
    key1: "P1",
    key2: "CPU1",
    keys: ["P1", "P2", "CPU1", "CPU2"]
  }),
  mounted: function() {
    this.$store.dispatch("play/fetchWrestlers");
  },
  methods: {
    onActive: function(active) {
      this.$store.commit("play/SET_ACTIVE", {
        active
      });
    },
    onWrestler: function(wrestler) {
      this.$store.commit("play/SET_PLAYER", {
        active: this.active,
        wrestler
      });
    },
    disabledPlay() {
      if (!this.players[this.key1] || !this.players[this.key2]) {
        return true;
      }
      return false;
    }
  },
  computed: {
    active() {
      return this.$store.state.play.active;
    },
    players() {
      return this.$store.state.play.players;
    },
    wrestlers() {
      return chunk(this.$store.state.play.wrestlers, 6);
    }
  }
};
</script>

