<template>
  <b-container fluid class="p-3">
    <!-- HEADER -->
    <b-row>
      <b-col md="12">
        <div class="d-flex justify-content-end">
          <div class="mr-auto">
            <a href="/">
              <i class="game-icon game-icon-power-button text-white icon-md" />
            </a>
          </div>

          <div>
            <b-badge color="default" pill>
              Turn : {{ turn }}
            </b-badge>
          </div>
        </div>
      </b-col>
    </b-row>

    <!-- MAIN -->
    <b-row>
      <div class="absolute-middle versus">
        <img
          src="http://img.over-blog-kiwi.com/1/00/19/38/20140927/ob_302629_versus-3af003f.png"
          alt=""
        />
      </div>

      <!-- WRESTLERS -->
      <b-col :cols="12/wrestlers.length" v-for="wrestler in wrestlers" :key="wrestler.id">
        <app-wrestler :wrestler="wrestler" />
      </b-col>
    </b-row>

    <!-- UI -->
    <div class="fixed-bottom ui">
      <b-row>
        <!-- CARDS -->
        <b-col cols="6">
          
        </b-col>

        <!-- STATS -->
        <b-col cols="6">
          <app-stat :wrestler="wrestlers[0]"></app-stat>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import WrestlerStatVue from "../components/Wrestler/WrestlerStat.vue";

export default {
  data: () => ({
    turn: 0
  }),
  computed: {
    wrestlers() {
      //this.$route.params
      return [{ name: "Triple H" }, {}];
    }
  },
  components: {
    "app-wrestler": null,
    "app-stat": WrestlerStatVue
  }
};
</script>

<style scoped>
body {
  background: url("https://s-media-cache-ak0.pinimg.com/originals/7a/59/6e/7a596ec737f507a68d87b6acd7bc8876.jpg")
    no-repeat;
  background-color: black !important;
  background-position: center top;
}

.ui {
  height: 35%;
  border-top: 2px solid #292b2c;
  padding: 5px 15px;
  background: #000;
}

.absolute-middle {
  position: absolute;
  height: 150px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.fixed-middle {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.versus {
  top: -40%;
  text-align: center;
  width: 220px;
  z-index: 10;
}

.versus img {
  max-height: 150px;
}
</style>
