<template>
  <b-container class="mt-3">
    <!-- HEADER -->
    <b-row>
      <b-col>
        <b-button v-on:click="onBack">Back</b-button>
      </b-col>
    </b-row>

    <!-- WRESTLERS -->
    <b-row>
      <b-col>
        <app-wrestler
          :index="key1"
          :wrestler="players[key1] ? players[key1] : null"
          :onClick="onActive"
          :active="active === key1 ? true : false"
        />
      </b-col>
      <b-col>
        <app-wrestler
          :index="key2"
          :wrestler="players[key2] ? players[key2] : null"
          :onClick="onActive"
          :active="active === key2 ? true : false"
        />
      </b-col>
    </b-row>

    <!-- PLAY -->
    <b-row class="mt-2">
      <b-col class="text-center">
        <b-button :disabled="disabledPlay()" variant="success" v-on:click="onPlay()">Play</b-button>
      </b-col>
    </b-row>

    <!-- LIST -->
    <app-wrestler-list :wrestlers="wrestlers" :onClick="onWrestler" />
  </b-container>
</template>

<script>
export default {
  props: {
    active: { type: String, required: true },
    players: { type: Object, required: true },
    wrestlers: { type: Array, required: true },
    onActive: { type: Function, required: true },
    onWrestler: { type: Function, required: true },
    onPlay: { type: Function, required: true },
    onBack: { type: Function, required: true }
  },
  data: () => ({
    key1: "P1",
    key2: "CPU1",
    keys: ["P1", "P2", "CPU1", "CPU2"]
  }),
  methods: {
    disabledPlay() {
      if (!this.players[this.key1] || !this.players[this.key2]) {
        return true;
      }
      return false;
    }
  }
};
</script>

