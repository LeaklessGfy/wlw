<template>
  <div class="page">
    <b-container class="mt-2">
      <b-row>
        <b-table striped hover dark :items="items"></b-table>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ name: "WWE", nb: 70, gold: 10 }]
    };
  }
};
</script>

