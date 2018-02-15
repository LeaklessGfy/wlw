<template>
  <b-container fluid class="mt-3">
    <!-- HEADER -->
    <b-row>
      <b-col>
        <b-button v-on:click="onBack">Back</b-button>
      </b-col>
    </b-row>

    <!-- MAIN -->
    <component :is="child" v-bind:wrestlers="wrestlers" v-bind:active="active" />

    <!-- UI -->
    <div class="fixed-bottom ui p-3">
      <b-row>
        <b-col>
          <div class="text-right">
            <b-button :disabled="active !== viewer">Skip turn</b-button>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="card in players[viewer].hand" :key="card.uid">
          <app-card />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import keys from "lodash/keys";

export default {
  props: {
    turn: { type: Number, required: true },
    viewer: { type: String, required: true },
    active: { type: String, required: true },
    targets: { type: Array, required: true },
    players: { type: Object, required: true },
    card: Object,
    mode: { type: Object, required: true },
    onBack: { type: Function, required: true }
  },
  computed: {
    child() {
      return require("../Mode/" + this.mode.uid);
    },
    wrestlers() {
      const wrestlers = [];
      for (let key of keys(this.players)) {
        wrestlers.push({ index: key, wrestler: this.players[key] });
      }
      return wrestlers;
    }
  }
};
</script>
