var x = 100;
var y = 400;
var d = 20;

function setup(){
  createCanvas(580, 220);
  background(204);
  noFill();
}

function draw(){
  for(var i=1; i<7; i++){
    ellipse(x, x, i*d, i*d);
    ellipse(y, x, i*d, i*d);
  }
}
