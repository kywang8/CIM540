//sketch 1

function setup() {
  createCanvas(800, 400);
  background(204);
}

function draw() {
  quad(50, 90, 90, 110, 90, 160, 50, 180);
  rect(90, 110, 25, 50);
  quad(110, 110, 150, 90, 150, 180, 110, 160);
  ellipse(100, 100, 25, 25);
}

// sketch 2: part of an ellipse

function setup(){
  createCanvas(400,200);
  background(204);
  angleMode(DEGREES);
}

function draw (){
  //pacman
  fill(255, 255, 0);
  arc (90, 60, 80, 80, 45, 315);
  arc (170, 60, 80, 80, 55, 300);
  arc (250, 60, 80, 80, 45, 315);
  arc (330, 60, 80, 80, 45, 330);
}

//sketch 3: Stroke Attrivute: strokeWeight

function setup() {
  createCanvas(800, 400);
  background(204);
}

function draw(){
  strokeWeight(1);
  fill (255, 0, 0);
  ellipse (90, 60, 80, 80);
  strokeWeight(8);
  ellipse(180, 60, 80, 80);
  strokeWeight(15);
  ellipse (280, 60, 80, 80);
}

//sketch 4: Stroke Attribute: strokeJoin()

function setup(){
  createCanvas(400, 200);
  background(204);
  strokeWeight(10);
}

function draw(){
  //round the stroke corners
  strokeJoin(ROUND);
  rect(40, 25, 70, 70);
  //stroke corners
  strokeJoin(BEVEL);
  rect (140, 25, 70, 70);
}

//sketch 5: Stroke Attribute: strokeCap()
function setup(){
  createCanvas(400, 200);
  background(204);
  strokeWeight(10);
}

function draw(){
  //strokeCap
  strokeCap(SQUARE);
  line(40, 25, 80, 95);
  strokeCap(ROUND);
  line(140, 25, 200, 95);
}

//sketch 6: noFill()

function setup(){
  createCanvas(480, 120);
  background(204);
}

function draw(){
  fill(153);
  ellipse(132, 82, 200, 200);
  noFill();
  ellipse(228, -16, 200, 200);
}

//sketch 7: RGB color with noStroke()

function setup(){
  createCanvas(480, 120);
  background(0);
  noStroke();
}

function draw(){
  fill(255, 0, 0);  //red
  ellipse(132, 82, 200, 200);
  fill(0, 255, 0);  //green
  ellipse(228, -16, 200, 200);
  fill(0, 0, 255);  //blue
  ellipse(268, 118, 200, 200);
}

//sketch 9: transparency

function setup(){
createCanvas(480, 120);
noStroke();
}

function draw(){
  background(204, 226, 225);
  fill (255, 0, 0, 160);
  ellipse(132, 82, 200, 200);
  fill (0, 255, 0, 160);
}

//sketch 10: creating a creature

function draw(){
  fill(0);
  beginShape();
  vertex(50, 120);
  vertex(100, 90);
  vertex(110, 60);
  vertex(80, 20);
  vertex(210, 60);
  vertex(160, 80);
  vertex(200, 90);
  vertex(140, 100);
  vertex(130, 120);
  endShape();
  fill(255, 255, 0);
  ellipse(155, 60, 8, 8);
}
