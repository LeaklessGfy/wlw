<template>
  <b-form>
    <b-button v-on:click="forceSkip">Force skip</b-button>

    <b-form-group label="Viewer" label-for="viewerInput">
      <b-form-select
        id="viewerInput"
        v-model="viewer"          
        :options="viewers"
        required
      />
    </b-form-group>

    <b-form-group label="Active" label-for="activeInput">
      <b-form-select
        id="activeInput"
        v-model="active"          
        :options="viewers"
        required
      />
    </b-form-group>

    <b-form-group label="Health" label-for="healthInput">
      <b-form-input id="healthInput" type="range" v-model="health" />
    </b-form-group>

    <b-form-group label="Stamina" label-for="staminaInput">
      <b-form-input id="staminaInput" type="number" v-model="stamina" />
    </b-form-group>

    <b-form-group label="Intensity" label-for="intensityInput">
      <b-form-input id="intensityInput" type="number" v-model="intensity" />
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  props: {
    hide: Function
  },
  data: () => {
    return {
      viewers: ["P1", "CPU1"]
    };
  },
  methods: {
    updatePlayer(update) {
      const wrestler = Object.assign({}, this.wrestler, update);
      this.$store.commit("play/SET_PLAYER", {
        active: this.viewer,
        wrestler: wrestler
      });
    },
    forceSkip() {
      this.$store.dispatch("play/flow", { state: 1 });
      this.hide();
    }
  },
  computed: {
    viewer: {
      get() {
        return this.$store.state.play.viewer;
      },
      set(viewer) {
        this.$store.commit("play/SET_VIEWER", {
          viewer
        });
      }
    },
    active: {
      get() {
        return this.$store.state.play.active;
      },
      set(active) {
        this.$store.commit("play/SET_ACTIVE", {
          active
        });
      }
    },
    wrestler() {
      return this.$store.state.play.players[this.viewer];
    },
    health: {
      get() {},
      set(health) {
        if (!health) return;
        health = parseInt(health, 10);
        if (health > 100) return;
        this.updatePlayer({
          health: { val: health, max: 100 }
        });
      }
    },
    stamina: {
      get() {
        return this.wrestler ? this.wrestler.stamina.val : 0;
      },
      set(stamina) {
        if (!stamina) return;
        stamina = parseInt(stamina, 10);
        if (stamina > 10) return;
        this.updatePlayer({
          stamina: { val: stamina, max: 10 }
        });
      }
    },
    intensity: {
      get() {
        return this.wrestler ? this.wrestler.intensity.val : 0;
      },
      set(intensity) {
        if (!intensity) return;
        intensity = parseInt(intensity, 10);
        if (intensity > 10) return;
        this.updatePlayer({
          intensity: { val: intensity, max: 10 }
        });
      }
    }
  }
};
</script>

