<template>
  <b-card class="stats" no-body>
    <b-tabs card>
      <b-tab :title="wrestler.name" active>
        Tab Contents 1
      </b-tab>
      <b-tab title="Stats">
        Tab Contents 2
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
export default {
  props: {
    wrestler: { type: Object, required: true }
  }
};
</script>
