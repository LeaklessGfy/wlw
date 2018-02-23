<template>
  <b-card 
    :title="wrestler ? wrestler.name : 'Select'"
    :img-src="wrestler ? wrestler.img : 'https://lh3.googleusercontent.com/EnHBPZtxV0Gkj_bVGADHHgqnEXE2PXtKYF4Rclovs0SJjO8n6vm60Y6Qxc0G1DqBn4k=w300'"
    v-on:click="onClick ? onClick(index) : null"
    img-alt="Image"
    img-top
    bg-variant="dark"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 text-center mx-auto wrestler text-white"
    v-bind:class="{'active': active, 'targeted': targeted}"
  >
    <b-badge>{{ index }}</b-badge>

    <div v-if="wrestler" class="mt-2">
      <b-progress
        :value="wrestler.health.val"
        :title="wrestler.health.val + '/' + wrestler.health.max"      
        variant="danger"
      />

      <i
        class="fa fa-circle mt-2"
        style="color:orange;margin-right:2px;"
        v-for="s in wrestler.stamina.val"
        :key="wrestler.uid + '_s_' + s"
      /><i
        class="fa fa-circle mt-2"
        style="color:dimgrey;margin-right:2px;"
        v-for="s in wrestler.stamina.max - wrestler.stamina.val"
        :key="wrestler.uid + '_sm_' + s"
      />

      <br/>

      <i
        class="fa fa-fire fa-lg mt-2"
        style="color:red;margin-right:2px;"
        v-for="i in wrestler.intensity.val"
        :key="wrestler.uid + '_i_' + i"
      /><i
        class="fa fa-fire fa-lg mt-2"
        style="color:dimgrey;margin-right:2px;"
        v-for="i in wrestler.intensity.max - wrestler.intensity.val"
        :key="wrestler.uid + '_im_' + i"
      />
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    index: String,
    wrestler: Object,
    active: Boolean,
    targeted: Boolean,
    onClick: Function
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
.wrestler.targeted {
  border-color: red;
  opacity: 1;
  filter: sepia(1) saturate(1000%) hue-rotate(-10deg);
}
</style>
