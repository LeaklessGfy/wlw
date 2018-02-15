<template>
  <b-container fluid class="mt-3">
    <!-- HEADER -->
    <b-row>
      <b-col>
        <b-button>Back</b-button>
      </b-col>
    </b-row>

    <!-- MAIN -->
    <component :is="child" v-bind:wrestlers="wrestlers"></component>

    <!-- UI -->
    <div class="fixed-bottom ui">
      <b-row>
        <b-col v-for="card in players[viewer].hand" :key="card.uid">

        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    turn: { type: Number, required: true },
    active: { type: String, required: true },
    targets: { type: Array, required: true },
    players: { type: Object, required: true },
    card: { type: Object, required: true },
    mode: { type: Object, required: true }
  },
  computed: {
    child() {
      return require("../Mode/" + this.mode.uid);
    },
    wrestlers() {
      return values(this.players);
    }
  }
};
</script>
