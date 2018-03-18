<template>
  <b-img
    :src="src"
    :title="title"
    v-on:click="onClick ? onClick() : null"
    thumbnail
    fluid
    :class="{
      'wrestler-img': true,
      'bg-dark': true,
      'active': active
    }"
    width="75px"
    alt="Wrestler image"
  />
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    title: { type: String, required: true },
    active: Boolean,
    onClick: Function
  }
};
</script>

<style scoped>
.wrestler-img {
  opacity: 0.7;
}
.wrestler-img:hover {
  opacity: 1;
  border-color: #fff;
}
</style>

