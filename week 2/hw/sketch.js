function setup() {
  createCanvas(800, 400);
  background(255);
}

function draw (){
  fill (204);
  fill(128, 0, 0);
  quad(40, 60, 100, 60, 120, 120, 20, 120);
  triangle(40, 60, 40, 40, 50, 60);
  triangle(100, 40, 100, 60, 90, 60);
  fill(153, 102, 0);
  quad(60, 100, 80, 100, 100, 120, 40, 120);
  fill(102, 51, 0);
  triangle(70, 120, 60, 100, 80, 100);
  fill(255, 255, 255);
  ellipse(50, 75, 10, 10);
  ellipse(90, 75, 10, 10);
}
