var x = 80;
var y = 0;
var speed = 5;
var a = 60;

function setup(){
  createCanvas(480, 120);
}

function draw(){
  background(0);
  currentTime = millis();
  stroke(255);
  y += speed;
  line(x, y, x, y+20);
  line(2*x, y-30, 2*x, y+20-30);
  line(3*x, y+50, 3*x, y+20+50);
  line(4*x, y-10, 4*x, y+20-10);
  if(y > height){
    y = 0;
    x = random(0, width);
  }
  if(currentTime > 2000){
    fill(255, 255, 0);
    ellipse(400, a, 30, 30);
  }
}
