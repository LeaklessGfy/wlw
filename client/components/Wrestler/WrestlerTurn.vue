<template>
  <table class="mx-auto">
    <tr>
      <td v-for="(n, i) in allNext" :key="i">
        <app-wrestler-img :src="players[n].img" :title="n" :active="isActive(n, i)" />
      </td>
    </tr>
  </table>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    isActive(k, i) {
      return (
        k === this.active &&
        (i === 0 || this.next.length < this.baseNext.length)
      );
    }
  },
  computed: {
    ...mapState("play", {
      active: s => s.active,
      baseNext: s => s.baseNext,
      next: s => s.next,
      players: s => s.players
    }),
    allNext() {
      if (this.next.length < this.baseNext.length) return this.baseNext;
      return [this.active].concat(this.next);
    }
  }
};
</script>

