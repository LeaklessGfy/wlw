import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import PlayMode from "../views/PlayMode";
import PlayWrestler from "../views/PlayWrestler";
import PlayGame from "../views/PlayGame";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      name: "play-mode",
      path: "/play",
      component: PlayMode
    },
    {
      name: "play-wrestler",
      path: "/play/:mode",
      component: PlayWrestler
    },
    {
      name: "play-game",
      path: "/play/:mode/:w",
      component: PlayGame
    }
  ]
});
