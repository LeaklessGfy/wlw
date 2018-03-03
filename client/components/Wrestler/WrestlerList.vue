<template>
  <div class="wrestler-box">
    <b-row v-for="(row, i) in wrestlers" :key="i">
      <b-col cols="2" v-for="wrestler in row" :key="wrestler.uid">
        <b-img
          :src="wrestler.img"
          :title="wrestler.name"
          v-on:click="onClick(wrestler)"
          thumbnail
          fluid
          class="wrestler-item"
          rounded="circle"
          width="75"
          alt="Wrestler image"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    wrestlers: { type: Array, required: true },
    onClick: { type: Function, required: true }
  }
};
</script>

<style scoped>
.wrestler-box {
  margin-top: 20px;
  height: 400px;
  padding: 5px 15px;
}
.wrestler-item {
  opacity: 0.7;
  background-color: #05072d !important;
  border-color: #05072d;
}
.wrestler-item:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
