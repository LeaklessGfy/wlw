<template>
  <b-row class="text-center">
    <b-col>
      <app-wrestler
        :index="0"
        :wrestler="wrestlers[0].wrestler"
        :active="0 === active"
        :targeted="isTargeted(0)"
        :opponent="0 !== active"
        :partner="0 === active"
        :disabled="isDisabled(0)"
        :onClick="onClick"
      />        
    </b-col>

    <b-col>
      <img
        src="http://img.over-blog-kiwi.com/1/00/19/38/20140927/ob_302629_versus-3af003f.png"
        alt=""
        width="400px"
      />
    </b-col>

    <b-col>
      <app-wrestler
        :index="1"
        :wrestler="wrestlers[1].wrestler"
        :active="1 === active"
        :targeted="isTargeted(1)"
        :opponent="1 !== active"
        :partner="1 === active"
        :disabled="isDisabled(1)"
        :onClick="onClick"
      />
    </b-col>
  </b-row>
</template>

<script>
import keys from "lodash/keys";
import { mapState } from "vuex";

export default {
  props: {
    onClick: Function
  },
  methods: {
    isTargeted(index) {
      return this.targets.find(target => target === index) !== undefined;
    },
    isDisabled(index) {
      return this.disabled.find(disabled => disabled === index) !== undefined;
    }
  },
  computed: {
    ...mapState("play", {
      active: s => s.active,
      targets: s => s.targets,
      players: s => s.players
    }),
    disabled() {
      return this.$store.state.ui.disabled;
    },
    wrestlers() {
      const wrestlers = [];
      for (let key of keys(this.players)) {
        wrestlers.push({ index: key, wrestler: this.players[key] });
      }
      return wrestlers;
    }
  }
};
</script>
