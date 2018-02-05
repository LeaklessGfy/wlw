<template>
  <b-card
    :img-src="mode.img"
    img-top
    img-alt="Mode image"
    tag="mode"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <h4 slot="header">{{mode.name}} <b-badge>{{mode.numbers}}</b-badge></h4>
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
