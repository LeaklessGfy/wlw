<template>
  <b-modal v-model="modal"
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
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("play", {
      active: s => s.active,
      players: s => s.players,
      card: s => s.card
    }),
    modal: {
      get() {
        return this.$store.state.ui.modalCard;
      },
      set(modalCard) {
        this.$store.commit("ui/SET_MODAL_CARD", { modalCard });
      }
    }
  }
};
</script>

