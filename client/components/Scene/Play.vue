<template>
  <b-container fluid class="mt-3">
    <notifications group="card::status" position="top center">
      <template slot="body" slot-scope="props">
        <b-alert show class="bg-dark text-white mt-4">{{props.item.title}}</b-alert>
      </template>
    </notifications>

    <!-- HEADER -->
    <b-row class="mb-2">
      <b-col>
        <b-button v-on:click="onBack">Back</b-button>
      </b-col>
      <b-col class="text-center">
        <em>Turn n: {{turn}}</em>
        <app-wrestler-turn />
      </b-col>
      <b-col>
      </b-col>
    </b-row>

    <!-- MAIN -->
    <component :is="child" v-bind:onClick="onWrestler" />

    <!-- UI -->
    <div class="fixed-bottom ui p-3">
      <!-- ACTIONS -->
      <app-actions :onCancel="onCancel" :onEndTurn="onEndTurn" />

      <!-- CARDS -->
      <b-row class="m-2">
        <b-col cols="2" />
        <b-col><app-card-list :onCard="onCard" /></b-col>
        <b-col cols="2" />
      </b-row>
    </div>

    <app-card-modal />
    <app-wrestler-modal :onRetry="onRetry" :onBack="onBack" />
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    onBack: { type: Function, required: true }
  },
  mounted: function() {
    this.$store.dispatch("play/newTurn", this.$notify);
  },
  methods: {
    onCard(index, card) {
      if (this.viewer !== this.active || !card.valid) return;
      if (index === this.card) {
        return this.onCancel();
      }
      this.$store.commit("play/SET_CARD", {
        card: index
      });
      this.$store.commit("play/SET_TARGETS", {
        targets: []
      });
      let disabled = [];
      switch (card.targets[this.targets.length]) {
        case 0:
          disabled = this.opponents;
          break;
        case 1:
          disabled = this.partners;
          break;
      }

      this.$store.commit("ui/SET_DISABLED", { disabled });
      // switch card.targets ui helper ? (TARGET_CARDS)
    },
    onWrestler(index) {
      if (
        this.viewer !== this.active ||
        this.card === null ||
        !this.shouldSelectTarget
      ) {
        return;
      }
      if (this.disabled.find(d => d === index)) {
        return;
      }
      this.$store.commit("play/ADD_TARGET", {
        target: index
      });
      if (!this.shouldSelectTarget) {
        this.$store.commit("ui/SET_DISABLED", { disabled: [] });
        this.$store.dispatch("play/play", this.$notify);
      }
    },
    onCancel() {
      this.$store.commit("play/SET_CARD", {
        card: null
      });
      this.$store.commit("play/SET_TARGETS", {
        targets: []
      });
      this.$store.commit("ui/SET_DISABLED", { disabled: [] });
    },
    onEndTurn() {
      this.$store.dispatch("play/newTurn", this.$notify);
    },
    onRetry() {
      //this.$store.dispatch("play/retry");
    }
  },
  computed: {
    ...mapState("play", {
      viewer: s => s.viewer,
      turn: s => s.turn,
      active: s => s.active,
      players: s => s.players,
      targets: s => s.targets,
      card: s => s.card,
      mode: s => s.mode
    }),
    disabled() {
      return this.$store.state.ui.disabled;
    },
    child() {
      return require("../Mode/" +
        this.mode.uid.replace(/^\w/, c => c.toUpperCase()));
    },
    activeCard() {
      if (this.card === null) return null;
      return this.players[this.active].hand[this.card];
    },
    shouldSelectTarget() {
      return this.targets.length < this.activeCard.targets.length;
    },
    opponents() {
      if (this.mode.team) {
        return;
      }
      return Object.keys(this.players).filter(k => k !== this.viewer);
    },
    partners() {
      if (this.mode.team) {
        return;
      }
      return [this.viewer];
    }
  }
};
</script>
