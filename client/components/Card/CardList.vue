<template>
  <b-row>
    <b-col cols="1" v-for="(c, i) in players[viewer].hand" :key="c.uid + i">
      <app-card
        :index="i"
        :card="c"
        :available="viewer === active"
        :selected="i === card"
        :onClick="onCard"
      />
    </b-col>
  </b-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    onCard: Function
  },
  computed: {
    ...mapState("play", {
      viewer: s => s.viewer,
      active: s => s.active,
      players: s => s.players,
      card: s => s.card
    })
  }
};
</script>

