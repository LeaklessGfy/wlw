<template>
  <b-container class="mt-2">
    <b-row v-for="(row, i) in modes" :key="i">
      <b-col v-for="mode in row" cols="4" :key="mode.id">
        <app-mode :mode="mode" :onClick="onMode" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    modes: { type: Array, required: true },
    onMode: { type: Function, required: true }
  }
};
</script>

