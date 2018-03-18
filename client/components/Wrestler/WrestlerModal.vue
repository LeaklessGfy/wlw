<template>
  <div v-if="modal">
    <b-modal v-model="modal"
      title="Winner"
      header-bg-variant="dark"
      header-text-variant="light"
      body-bg-variant="dark"
      body-text-variant="light"
      footer-bg-variant="dark"
      size="lg"
    >
      <b-container fluid>
          <app-wrestler
            :index="winner"
            :wrestler="players[winner]"
            :active="true"
          />
      </b-container>
      <div slot="modal-footer" class="w-100 text-center">
        <b-btn size="sm" variant="outline-secondary" @click="onRetry">
          Retry
        </b-btn>
        <b-btn size="sm" variant="outline-danger" @click="onBack">
          Quit
        </b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    onRetry: { type: Function, required: true },
    onBack: { type: Function, required: true }
  },
  computed: {
    ...mapState("play", {
      winner: s => s.winner,
      players: s => s.players
    }),
    modal: {
      get() {
        return this.$store.state.ui.modalWinner;
      },
      set(modalWinner) {
        this.$store.commit("ui/SET_MODAL_WINNER", { modalWinner });
      }
    }
  }
};
</script>

