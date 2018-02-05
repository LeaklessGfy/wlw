<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./Common/Navbar";

export default {
  components: {
    "app-nav": Navbar
  }
};
</script>
