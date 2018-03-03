<template>
  <b-row class="text-center">
    <b-col>
      <app-wrestler
        :index="wrestlers[0].index"
        :wrestler="wrestlers[0].wrestler"
        :active="wrestlers[0].index === active"
        :targeted="isTargeted(wrestlers[0].index)"
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
        :index="wrestlers[1].index"
        :wrestler="wrestlers[1].wrestler"
        :active="wrestlers[1].index === active"
        :targeted="isTargeted(wrestlers[1].index)"
        :onClick="onClick"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    wrestlers: { type: Array, required: true },
    active: { type: String, required: true },
    targets: { type: Array, required: true },
    onClick: Function
  },
  methods: {
    isTargeted(index) {
      return this.targets.filter(target => target === index).length > 0;
    }
  }
};
</script>
