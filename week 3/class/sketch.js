// VARIABLES
var x = 240;
var y = 60;
var d = 10;

function setup(){
  createCanvas(480, 120);
  background(204);
}

function draw(){
  ellipse (80, y, d, d);
}

// change variable
function draw(){
  x = 50;
  ellipse(x, y, 10, 10);
}

// multiply variables
function draw(){
  ellipse(x, y, d, d);
  ellipse(x, y, 3*d, 3*d);
}
