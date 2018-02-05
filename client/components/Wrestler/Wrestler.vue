<template>
  <b-card 
    :title="wrestler.name ? wrestler.name : 'Select'"
    :img-src="wrestler.img ? wrestler.img : 'https://www.shareicon.net/data/512x512/2015/10/26/662430_man_512x512.png'"
    v-on:click="onClick(id)"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 text-center mx-auto wrestler"
    v-bind:class="{'active': active}"
  >
  </b-card>
</template>

<script>
export default {
  props: {
    id: Number,
    wrestler: { type: Object, required: true },
    onClick: Function,
    active: Boolean
  }
};
</script>

<style>
.wrestler img {
  max-height: 216px;
}
.wrestler.active {
  border: 2px solid goldenrod;
}
</style>
