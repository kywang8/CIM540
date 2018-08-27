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
