<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#/">WLW</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#/play">Play</b-nav-item>
        <b-nav-item href="#/multi" disabled>Multiplayer</b-nav-item>
        <b-nav-item href="#/about">About</b-nav-item>
        <b-nav-item v-on:click="modal = true"><i class="fa fa-lock"/></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-modal v-model="modal" title="Admin" >
      <app-admin :hide="() => modal = false"/>
    </b-modal>
  </b-navbar>
</template>

<script>
export default {
  data: () => ({
    modal: false
  })
};
</script>

