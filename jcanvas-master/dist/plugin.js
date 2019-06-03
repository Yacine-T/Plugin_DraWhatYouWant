$(function(){

$('canvas').draw({
  fn: function(ctx) {
    ctx.fillStyle = '#333';
    ctx.fillRect(50, 50, 100, 100);
  }
});

 }); 