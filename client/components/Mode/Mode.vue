<template>
  <b-card :title="mode.title"
          :img-src="mode.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{ mode.description }}
    </p>
    <b-button v-on:click="onClick(mode)" variant="primary">Choose</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    mode: { type: Object, required: true },
    onClick: { type: Function, required: true }
  }
};
</script>

<style>

</style>
