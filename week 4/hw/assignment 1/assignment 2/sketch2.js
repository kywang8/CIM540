var x = 1;
var y = 50;
var d = 15;

function setup(){
  createCanvas(580, 180);
  background(204);
}

function draw(){
  for(var i=0; i < 13; i++){
    rect (i*y, i*d, y, d);
  }
}
