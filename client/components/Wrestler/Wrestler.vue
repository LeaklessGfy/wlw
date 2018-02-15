<template>
  <b-card 
    :title="wrestler ? wrestler.name : 'Select'"
    :img-src="wrestler ? wrestler.img : 'https://www.shareicon.net/data/512x512/2015/10/26/662430_man_512x512.png'"
    v-on:click="onClick(id)"
    img-alt="Image"
    img-top
    bg-variant="dark"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 text-center mx-auto wrestler text-white"
    v-bind:class="{'active': active}"
  >
    <div v-if="wrestler">
      <b-progress
        :value="wrestler.health.val"
        :title="wrestler.health.val + '/' + wrestler.health.max"      
        variant="danger"
      />

      <icon
        name="circle"
        class="mt-2"
        style="color: orange;margin: 2px;"
        v-for="s in wrestler.stamina.val"
        :key="s"
      />

      <icon
        name="circle"
        style="color: blue;margin: 2px;"
        v-for="s in wrestler.stamina.val"
        :key="s"
      />
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    id: Number,
    wrestler: Object,
    onClick: Function,
    active: Boolean
  }
};
</script>

<style scoped>
.wrestler {
  opacity: 0.7;
}
.wrestler:hover {
  opacity: 1;
  border-color: #fff;
  cursor: pointer;
}
.wrestler.active {
  border-color: gold;
}
</style>
