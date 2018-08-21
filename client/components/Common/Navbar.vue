<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-container>
      <b-navbar-brand href="#/">Home</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#/solo">Solo</b-nav-item>
          <b-nav-item href="#/online" disabled>Online</b-nav-item>
          <b-nav-item href="#/federation">Federation</b-nav-item>
          <b-nav-item href="#/store">Store</b-nav-item>
          <b-nav-item v-on:click="modal = true">
            <i class="fa fa-lock" />
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#/login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>

    <b-modal v-model="modal" title="Admin">
      <app-admin :hide="() => modal = false" />
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
