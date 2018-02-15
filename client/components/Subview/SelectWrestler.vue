<template>
  <b-container class="mt-3">
    <!-- HEADER -->
    <b-row>
      <b-col>
        <b-button>Back</b-button>
      </b-col>
    </b-row>

    <!-- WRESTLERS -->
    <b-row>
      <b-col>
        <app-wrestler
          :id="0"
          :wrestler="selected.length > 0 ? selected[0] : null"
          :onClick="onActive"
          :active="active === 0 ? true : false"
        />
      </b-col>
      <b-col>
        <app-wrestler
          :id="1"
          :wrestler="selected.length > 1 ? selected[1] : null"
          :onClick="onActive"
          :active="active === 1 ? true : false"
        />
      </b-col>
    </b-row>

    <!-- PLAY -->
    <b-row class="mt-2">
      <b-col class="text-center">
        <b-button :disabled="selected.length < 2" variant="success" v-on:click="onPlay()">Play</b-button>
      </b-col>
    </b-row>

    <!-- LIST -->
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

