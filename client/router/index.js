import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import Play from "../views/Play";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/play",
      component: Play
    }
  ]
});
