<template>
  <div class="wrestler-box">
    <b-row v-for="(row, i) in wrestlers" :key="i">
      <b-col cols="2" v-for="wrestler in row" :key="wrestler.id">
        <b-img
          :src="wrestler.img"
          :title="wrestler.name"
          v-on:click="onClick(wrestler)"
          thumbnail
          fluid
          class="wrestler-item bg-dark"
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
  border: 1px solid #fff;
  height: 400px;
  padding: 5px 15px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.wrestler-item {
  opacity: 0.7;
}
.wrestler-item:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
