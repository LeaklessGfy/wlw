<template>
  <b-row>
    <b-col>
      <app-wrestler
        :index="wrestlers[0].index"
        :wrestler="wrestlers[0].wrestler"
        :active="wrestlers[0].index === active"
      />        
    </b-col>

    <b-col>
      <img
        src="http://img.over-blog-kiwi.com/1/00/19/38/20140927/ob_302629_versus-3af003f.png"
        alt=""
      />
    </b-col>

    <b-col>
      <app-wrestler
        :index="wrestlers[1].index"
        :wrestler="wrestlers[1].wrestler"
        :active="wrestlers[1].index === active"
      />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    wrestlers: { type: Array, required: true },
    active: { type: String, required: true }
  }
};
</script>
