// //moving a shape
//
// var x = 0;
// var speed = 5;
// var radius = 40;
//
// function setup(){
//   createCanvas(480, 120);
//   angleMode(DEGREES);
// }
//
// function draw(){
//   background(0);
//   x += speed;
//   if(x > width){    //wrap around
//     x = 0;
//   }
//   fill(255, 255, 0);
//   arc(x, 60, radius, radius, 45, 315);
// }

//to change direction, change the x value to be width of canvas and then change the speed to negative

//bounce off the wall

// var x = 0;
// var speed = 5;
// var radius = 40;
// var direction = 1;
//
// function setup(){
//   createCanvas(480, 120);
//   angleMode(DEGREES);
// }
//
// function draw(){
//   background(0);
//   fill(255, 255, 0);
//   x += speed;
//   if (x > width){
//     speed = -5;
//     direction = -1;
//   } else if( x < 0){
//     speed = 5;
//     direction = 1;
//   }
//   if (direction == 1){
//     arc(x, 60, radius, radius, 45, 315);
//   } else{
//     arc(x, 60, radius, radius, 225, 135);
//   }
// }

//a single falling raindrop

// var speed = 5;
// var y = 0;
// var direction = 1;
//
// function setup(){
//   createCanvas(480, 120);
// }
//
// function draw(){
//   background(0);
//   y += speed;
//   if (y > height){
//     speed = 3;
//     direction = 1;
//     y = 0;
//   }
//   rect(240, y, 2, 30);
// }

//multiple falling raindrops
//
// var speed = 5;
// var y = 0;
// var y2 = 10;
// var direction = 1;
//
// function setup(){
//   createCanvas(480, 120);
// }
//
// function draw(){
  // background(0);
  // y += speed;
//   if (y > height){
//     speed = 2;
//     direction = 1;
//     y = 0;
//   }
//   rect(240, y*2, 2, 40);
//   rect(120, y, 2, 20);
//   rect(360, y*2, 2, 25);
//   rect(440, y, 2, 10);
// }
//
// //alternatively:
//
// var x = 80;
// var y = 0;
// var speed = 5;
//
// function setup(){
//   createCanvas(480, 120);
// }
//
// function draw(){
//   background(0);
//   stroke(255);
//   y+= speed;
//   line(x, y, x, y+20);
//   line(2*x, y-30, 2*x, y+20-30);
//   line(3*x, y+50, 3*x, y+20+50);
//   line(4*x, y-10, 4*x, y+20-10);
//   if(y > height){
//     y = 0;
//     x = random(0, width); //two numbers = min and max EX: random(10, 20) = random # between 10 and 20
//   }
// }
//
// //start animation at certain time
//
var y = 60;
var speed = 5;

function setup() {
  createCanvas(480, 120);
}

function draw(){
  background(0);
  currentTime = millis();
  if(currentTime > 2000){
    y+=speed;
    if(y > height){
      y = 0;
    }
  }
  fill(255, 255, 0);
  ellipse(width/2, y, 30, 30);
}

//moving in Sine wave
//
// var angle = 0;
// var x = 0;
//
// function setup(){
//   createCanvas(480, 120);
//   angleMode(DEGREES);
// }
//
// function draw(){
//   background(0);
//   var y = sin(angle);
//   ellipse(x, height/2+y*height/3, 20, 20);
//   angle += 20;
//   x += 10;
//   if (x > width){
//     x = 0;
//   }
// }

//draw a sine wave

// function setup(){
//   createCanvas(480, 120);
//   angleMode(DEGREES);
// }
//
// function draw(){
//   background(255);
//   fill(0, 0, 255);
//   for(var x = 0; x < width; x+= 10){
//     var y = sin(x);
//     ellipse(x, height/2+y*30, 10, 10);
//   }
// }

//a moving Sine wave

// var angle = 0;
//
// function setup(){
//   createCanvas(480, 120);
//   angleMode(DEGREES);
// }
//
// function draw(){
//   background(255);
//   fill(0, 0, 255);
//   for(var x = 0; x < width; x += 10){
//     var y = sin(angle+x);
//     ellipse(x, height/2+y*30, 10, 10);
//   }
//   angle+=10;
// }
