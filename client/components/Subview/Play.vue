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
      v-bind:onClick="onWrestler"
    />

    <!-- UI -->
    <div class="fixed-bottom ui p-3">
      <!-- ACTIONS -->
      <b-row>
        <b-col>
          <b-button :disabled="disabledCancel()" v-on:click="onCancel">Cancel</b-button>
          <b-button :disabled="disabledPlay()" v-on:click="onPlay" variant="outline-success">Play</b-button>
        </b-col>
        <b-col class="text-white text-center">
          <p style="font-size:1.3em;">{{tips}}</p>
        </b-col>
        <b-col class="text-right">
          <b-button :disabled="active !== viewer" v-on:click="onEndTurn">End Turn</b-button>
        </b-col>
      </b-row>

      <!-- CARDS -->
      <b-row class="m-2">
        <b-col cols="2" />
        <b-col>
          <b-row>
            <b-col cols="1" v-for="(c, i) in players[viewer].hand" :key="c.uid + i">
              <app-card
                :index="i"
                :card="c"
                :available="shouldPlay"
                :selected="i === card"
                :onClick="onCard"
              />
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="2" />
      </b-row>
    </div>

    <b-modal v-model="modalCard"
             title="Play card"
             header-bg-variant="dark"
             header-text-variant="light"
             body-bg-variant="dark"
             body-text-variant="light"
             centered
             hide-footer
             hide-header
             size="sm"
    >
       <b-container fluid>
         <div v-if="card !== null">
            <app-card
              :index="0"
              :card="players[active].hand[card]"
              :available="true"
              :selected="true"
            />
          </div>
       </b-container>
    </b-modal>
  </b-container>
</template>

<script>
import keys from "lodash/keys";

export default {
  props: {
    onBack: { type: Function, required: true }
  },
  mounted: function() {
    this.$store.dispatch("play/newTurn");
  },
  methods: {
    onCard(index, card) {
      if (!this.shouldPlay || !card.valid) return;

      this.$store.commit("play/SET_CARD", {
        card: index
      });
      this.$store.commit("play/SET_TARGETS", {
        targets: []
      });

      let disabled = [];
      for (let t of card.targets) {
        switch (t) {
          case 0:
            disabled = this.opponents;
            break;
          case 1:
            disabled = this.partners;
            break;
        }
      }

      this.$store.commit("ui/SET_DISABLED", { disabled });
      // switch card.targets ui helper ? (TARGET_CARDS)
    },
    onWrestler(index) {
      if (!this.shouldPlay || this.card === null || !this.shouldSelectTarget) {
        return;
      }
      if (this.disabled.find(d => d === index)) {
        return;
      }
      // Check if index valid target (opponent or self)
      this.$store.commit("play/ADD_TARGET", {
        target: index
      });

      if (!this.shouldSelectTarget) {
        this.$store.commit("ui/SET_DISABLED", { disabled: [] });
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
    onPlay() {
      this.$store.dispatch("play/play");
    },
    onEndTurn() {
      this.$store.dispatch("play/newTurn");
    },
    disabledCancel() {
      if (!this.shouldPlay || this.card === null) return true;
      return false;
    },
    disabledPlay() {
      if (!this.shouldPlay || this.card === null || this.shouldSelectTarget)
        return true;
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
    modalCard: {
      get() {
        return this.$store.state.ui.modalCard;
      },
      set(modalCard) {
        this.$store.commit("ui/SET_MODAL_CARD", { modalCard });
      }
    },
    disabled() {
      return this.$store.state.ui.disabled;
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
    activeCard() {
      if (this.card === null) return null;
      return this.players[this.active].hand[this.card];
    },
    tips() {
      if (!this.shouldPlay) return "Wait for your turn";
      if (this.card === null) return "Select card or end turn";
      if (this.shouldSelectTarget) return "Select target(s)";
      return "Play or Cancel!";
    },
    shouldPlay() {
      return this.viewer === this.active;
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
