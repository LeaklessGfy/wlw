<template>
  <div class="page">
    <app-select-mode v-if="mode === null" />
    <app-select-wrestler v-else-if="!ready" :onPlay="play" :onBack="back" />
    <app-play v-else :onBack="back" />
  </div>
</template>

<script>
export default {
  data: () => ({
    ready: false
  }),
  methods: {
    play: function() {
      this.ready = true;
    },
    back: function() {
      this.$store.commit("play/RESET");
      this.ready = false;
    }
  },
  computed: {
    mode() {
      return this.$store.state.play.mode;
    }
  }
};
</script>
