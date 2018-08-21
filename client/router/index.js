import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import Play from "../views/Play";
import Solo from "../views/Solo";
import Federation from "../views/Federation";
import Login from "../views/Login";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    { path: "/", component: Home },
    { path: "/play", component: Play },
    { path: "/solo", component: Solo },
    { path: "/federation", component: Federation },
    { path: "/login", component: Login }
  ]
});
