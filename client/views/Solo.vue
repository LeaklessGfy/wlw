<template>
  <div class="page">
    <canvas id="canvas" width="" height=""></canvas>
  </div>
</template>

<script>
export default {
  mounted: function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var engine = new Glow.Engine(context);
    window.addEventListener("resize", () => this.resizeCanvas(canvas), false);
    this.resizeCanvas(canvas);
    engine.draw();
  },
  methods: {
    resizeCanvas(canvas) {
      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;
    }
  }
};
</script>

// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');
// window.addEventListener('resize', resizeCanvas, false);
// function resizeCanvas() {
//    canvas.width = window.innerWidth;
//    canvas.height = window.innerHeight;
//    drawStuff(); 
// }
// resizeCanvas();
// function drawStuff() {
//
// }
