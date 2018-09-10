x = 50
y = 150

function setup(){
  createCanvas(480, 500);
  background(204);
}

function draw(){
  rect(x, x, x, x);
  rect(y, x, x*2, x*2);
  rect(y*2, x, x*3, x*3);
}
