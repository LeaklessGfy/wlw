<template>
  <b-container>
    <b-row>
      <!-- FIRST -->
      <b-col>
        <app-wrestler
          :id="0"
          :wrestler="selected.length > 0 ? selected[0] : {}"
          :onClick="onActive"
          :active="active === 0 ? true : false"
        />
      </b-col>

      <!-- SECOND -->
      <b-col>
        <app-wrestler
          :id="1"
          :wrestler="selected.length > 1 ? selected[1] : {}"
          :onClick="onActive"
          :active="active === 1 ? true : false"
        />
      </b-col>
    </b-row>

    <b-row>
      <b-col class="text-center">
        <b-button v-on:click="onPlay()">Play</b-button>
      </b-col>
    </b-row>

    <app-wrestler-list :wrestlers="wrestlers" :onClick="onWrestler" />
  </b-container>
</template>

<script>
export default {
  props: {
    active: { type: Number, required: true },
    selected: { type: Array, required: true },
    wrestlers: { type: Array, required: true },
    onActive: { type: Function, required: true },
    onWrestler: { type: Function, required: true },
    onPlay: { type: Function, required: true }
  }
};
</script>

