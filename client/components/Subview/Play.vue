<template>
  <b-container fluid class="mt-3">
    <!-- HEADER -->
    <b-row class="mb-2">
      <b-col>
        <b-button v-on:click="onBack">Back</b-button>
      </b-col>
      <b-col class="text-center">
        <em>Turn n: {{turn}}</em>
      </b-col>
      <b-col>
      </b-col>
    </b-row>

    <!-- MAIN -->
    <component
      :is="child"
      v-bind:wrestlers="wrestlers"
      v-bind:active="active"
      v-bind:targets="targets"
      v-bind:onClick="onWrestler"
    />

    <!-- UI -->
    <div class="fixed-bottom ui p-3">
      <b-row>
        <b-col>
          <b-button :disabled="card === null" v-on:click="onCancel">Cancel</b-button>
          <b-button :disabled="disabledPlay()" v-on:click="onPlay" variant="success">Play</b-button>
        </b-col>
        <b-col class="text-white text-center">
          <p style="font-size: 1.3em;">{{tips}}</p>
        </b-col>
        <b-col class="text-right">
          <b-button :disabled="active !== viewer" v-on:click="onSkipTurn">Skip turn</b-button>
        </b-col>
      </b-row>
      <b-row class="m-2">
        <b-col v-for="c in players[viewer].hand" :key="c.uid">
          <app-card
            :card="c"
            :available="viewer === active"
            :selected="c === card"
            :onClick="onCard"
          />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import keys from "lodash/keys";

export default {
  props: {
    onBack: { type: Function, required: true }
  },
  methods: {
    onCard(card) {
      if (!this.playing) return;

      this.$store.commit("play/SET_CARD", {
        card: card
      });
      this.$store.commit("play/SET_TARGETS", {
        targets: []
      });
      // switch card.targets
      // ui helper ?
    },
    onWrestler(index) {
      if (
        !this.playing ||
        this.card === null ||
        this.targets.length >= this.card.targets.length
      ) {
        return;
      }
      // Check if index valid target (opponent or self)
      this.$store.commit("play/ADD_TARGET", {
        target: index
      });
    },
    onCancel() {
      this.$store.commit("play/SET_CARD", {
        card: null
      });
      this.$store.commit("play/SET_TARGETS", {
        targets: []
      });
    },
    onPlay() {
      alert("PLAY");
    },
    onSkipTurn() {
      alert("SKIP TURN");
    },
    disabledPlay() {
      if (!this.playing) return true;
      if (this.card === null) return true;
      if (this.targets.length !== this.card.targets.length) return true;
      return false;
    }
  },
  computed: {
    viewer() {
      return this.$store.state.play.viewer;
    },
    turn() {
      return this.$store.state.play.turn;
    },
    active() {
      return this.$store.state.play.active;
    },
    players() {
      return this.$store.state.play.players;
    },
    targets() {
      return this.$store.state.play.targets;
    },
    next() {
      return this.$store.state.play.next;
    },
    card() {
      return this.$store.state.play.card;
    },
    mode() {
      return this.$store.state.play.mode;
    },
    child() {
      return require("../Mode/" + this.mode.uid);
    },
    wrestlers() {
      const wrestlers = [];
      for (let key of keys(this.players)) {
        wrestlers.push({ index: key, wrestler: this.players[key] });
      }
      return wrestlers;
    },
    tips() {
      if (!this.playing) return "Wait";
      if (this.card === null) return "Select card";
      if (this.targets.length < this.card.targets.length)
        return "Select opponent(s)";
      return "Play or Cancel!";
    },
    playing() {
      return this.viewer === this.active;
    }
  }
};
</script>
