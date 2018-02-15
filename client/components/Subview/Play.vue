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
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    turn: { type: Number, required: true },
    wrestlers: { type: Array, required: true },
    mode: { type: Object, required: true }
  },
  computed: {
    child() {
      return require("../Mode/" + this.mode.uid);
    }
  }
};
</script>
