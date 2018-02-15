<template>
  <b-card 
    :title="wrestler ? wrestler.name : 'Select'"
    :img-src="wrestler ? wrestler.img : 'https://lh3.googleusercontent.com/EnHBPZtxV0Gkj_bVGADHHgqnEXE2PXtKYF4Rclovs0SJjO8n6vm60Y6Qxc0G1DqBn4k=w300'"
    v-on:click="onClick(index)"
    img-alt="Image"
    img-top
    bg-variant="dark"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 text-center mx-auto wrestler text-white"
    v-bind:class="{'active': active}"
  >
    <b-badge>{{ index }}</b-badge>

    <div v-if="wrestler" class="mt-2">
      <b-progress
        :value="wrestler.health.val"
        :title="wrestler.health.val + '/' + wrestler.health.max"      
        variant="danger"
      />

      <icon
        name="circle"
        class="mt-2"
        style="color: orange;margin: 0px 2px;"
        v-for="s in wrestler.stamina.val"
        :key="wrestler.uid + '_s_' + s"
      />

      <icon
        name="circle"
        style="color: blue;margin: 0px 2px;"
        v-for="s in wrestler.stamina.val"
        :key="wrestler.uid + '_i_' + s"
      />
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    index: String,
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
