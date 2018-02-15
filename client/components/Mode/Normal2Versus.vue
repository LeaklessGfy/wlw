<template>
  <b-row>
    <b-col>
      <app-wrestler :wrestler="wrestlers[0]" />        
    </b-col>

    <b-col>
      <img
        src="http://img.over-blog-kiwi.com/1/00/19/38/20140927/ob_302629_versus-3af003f.png"
        alt=""
      />
    </b-col>

    <b-col>
      <app-wrestler :wrestler="wrestlers[1]" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    wrestlers: { type: Array, required: true }
  }
};
</script>
