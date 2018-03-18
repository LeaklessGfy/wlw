<template>
  <table class="mx-auto mt-4">
    <tr v-for="(row, i) in wrestlers" :key="i">
      <td v-for="w in row" :key="w.uid">
        <app-wrestler-img :src="w.img" :title="w.name" :onClick="() => onClick(w)" />
      </td>
    </tr>
  </table>
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
</style>
