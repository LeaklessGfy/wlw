<template>
  <b-row>
    <b-col>
      <b-button :disabled="disabledCancel()" v-on:click="onCancel">Cancel</b-button>
    </b-col>
    <b-col class="text-center">
      <p style="font-size:1.3em;">{{tips}}</p>
    </b-col>
    <b-col class="text-right">
      <b-button :disabled="active !== viewer" v-on:click="onEndTurn">End Turn</b-button>
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    onCancel: { type: Function, required: true },
    onEndTurn: { type: Function, required: true }
  },
  methods: {
    disabledCancel() {
      if (this.viewer !== this.active || this.card === null) return true;
      return false;
    }
  },
  computed: {
    ...mapState("play", {
      viewer: s => s.viewer,
      active: s => s.active,
      targets: s => s.targets,
      players: s => s.players,
      card: s => s.card
    }),
    activeCard() {
      if (this.card === null) return null;
      return this.players[this.active].hand[this.card];
    },
    tips() {
      if (this.viewer !== this.active) return "Wait for your turn";
      if (this.card === null) return "Select card or end turn";
      if (this.targets.length < this.activeCard.targets.length)
        return "Select target(s)";
      return "Play!";
    }
  }
};
</script>

