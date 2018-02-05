import Vue from "vue";
import { sync } from "vuex-router-sync";
import BootstrapVue from "bootstrap-vue";
import App from "./components/App";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
sync(store, router);

const app = new Vue({
  router,
  store,
  ...App
});

export { app, router, store };
