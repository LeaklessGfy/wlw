<template>
  <div class="app-card">
    <div class="app-card-header">
      <b-row>
        <b-col>
          8
        </b-col>
        <b-col class="text-right">
          3
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
          <h2>DDT</h2>
        </b-col>
      </b-row>
    </div>
    <div class="text-center">
      Some description !
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.app-card {
  border-radius: 2px;
  height: 600px;
  width: 300px;
  border: 2px solid red;
  background: #f2f2f2;
  padding: 10px;
  top: 0;
  transition: top 0.2s ease-in;
}
.app-card:hover {
  position: relative;
  top: -200px;
}
</style>

