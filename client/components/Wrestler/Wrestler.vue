<template>
  <b-card 
    :title="wrestler ? wrestler.name : 'Select'"
    :img-src="wrestler ? wrestler.img : 'https://lh3.googleusercontent.com/EnHBPZtxV0Gkj_bVGADHHgqnEXE2PXtKYF4Rclovs0SJjO8n6vm60Y6Qxc0G1DqBn4k=w300'"
    v-on:click="onClick ? onClick(index, wrestler) : null"
    img-alt="Image"
    img-top
    bg-variant="dark"
    tag="article"
    style="max-width: 20em;"
    class="mb-2 text-center mx-auto wrestler text-white"
    v-bind:class="{'active': active, 'targeted': targeted, 'partner': partner, 'disabled': disabled}"
  >
    <b-badge>{{ index }}</b-badge>

    <div v-if="wrestler" class="mt-2">
      <b-progress
        :value="wrestler.health.val"
        :title="wrestler.health.val + '/' + wrestler.health.max"      
        variant="danger"
      />

      <i
        class="fa fa-circle mt-2 text-warning"
        style="margin-right:2px;"
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
        class="fa fa-fire fa-lg mt-2 text-danger"
        style="margin-right:2px;"
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
    partner: Boolean,
    disabled: Boolean,
    onClick: Function
  }
};
</script>

<style scoped>
/* BASE */
.wrestler {
  opacity: 0.7;
}
.wrestler .card-img-top {
  border-bottom: 2px #41526b solid;
}

/* ACTIVE */
.wrestler.active,
.wrestler.active.disabled:hover {
  opacity: 1;
  border-color: #d3c83f;
}
.wrestler.active .card-img-top,
.wrestler.active.disabled:hover .card-img-top {
  border-color: #d3c83f;
  background: #d3c83f;
}

/* OPPONENT */
.wrestler:hover {
  opacity: 1;
  cursor: crosshair;
  border-color: #df4f4c;
}
.wrestler:hover .card-img-top {
  background: #df4f4c;
  border-color: #df4f4c;
}
.wrestler.targeted {
  opacity: 1;
  border-color: #df4f4c; /*#c92965*/
  box-shadow: 0 0px 8px 2px #df4f4c, 0 0px 20px 0 #df4f4c;
}
.wrestler.targeted .card-img-top {
  border-color: #df4f4c;
  background: #df4f4c;
}

/* PARTENER */
.wrestler.partner:hover {
  border-color: #537545;
}
.wrestler.partner:hover .card-img-top {
  background: #537545;
  border-color: #537545;
}
.wrestler.targeted.partner {
  opacity: 1;
  border-color: #537545; /*#c92965*/
  box-shadow: 0 0px 8px 2px #537545, 0 0px 20px 0 #537545;
}
.wrestler.targeted.partner .card-img-top {
  border-color: #537545;
  background: #537545;
}

/* DISABLED */
.wrestler.disabled {
  opacity: 0.2 !important;
}
.wrestler.disabled:hover {
  border-color: #41526b;
}
.wrestler.disabled:hover .card-img-top {
  background: #0d0f17;
  border-color: #41526b;
}
</style>
