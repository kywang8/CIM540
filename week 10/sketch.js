//rubiks Cube example with flexible function

// function setup(){
//   createCanvas(480, 240);
//   background(204);
//   rubiksCube(10, 10);
//   rubiksCube(70, 100);
//   rubiksCube(250, 30);
//   rubiksCube(360, 80);
// }
//
// function rubiksCube(x, y){
//   fill(255, 0, 0);
//   rect(x, y, 50, 50);
//   fill(0, 255, 0);
//   rect(x+50, y, 50, 50);
//   fill(0, 0, 255);
//   rect(x, y+50, 50, 50);
//   fill(255, 0, 102);
//   rect(x+50, y+50, 50, 50);
// }

//generate random numberOfItems

// function setup(){
//   createCanvas(480, 120);
//   textSize(24);
//   textAlign(CENTER);
//   background(204);
//   rollDice(160, 60);
//   rollDice(320, 60);
// }
//
// function rollDice(x, y) {
//   var number = 1+int(random(6));
//   text(number, x, y);
// }

//return values

// function setup(){
//   createCanvas(480, 120);
//   textSize(24);
//   textAlign(CENTER);
//   background(204);
//   var face = rollDice();
//   text(face, 160, 60);
//   face = rollDice();
//   text(face, 320, 60);
// }
//
// function rollDice(){
//   var number = 1+int(random(6));
//   return number;
// }

//make colors assigned to numbers and then randomize


// function setup(){
//   createCanvas(480, 120);
//   textSize(24);
//   textAlign(CENTER);
//   background(204);
//   var number = rollDice();
//   if(number == 1){
//     fill(255, 0, 0);
//   } else if(number == 2){
//     fill(0, 0, 255);
//   } else if(number == 3){
//     fill(0, 255, 0);
//   } else{
//     fill(255, 0, 255);
//   }
//   rect(100, 10, 50, 50);
// }
//
// function rollDice(){
//   var number = 1+int(random(4));
//   return number;
// }


//constructor for spaceship
// function Spaceship(initX, initY){ //initial x, y values
//   //properties: location (x, y)
//   this.x = initX;
//   this.y = initY;
//   //methods:move() and display()
//   this.move = function(){
//     this.x += random(-5, 5); //randomly pick one # between -5 and 5
//   }
//   this.display = function(){
//     ellipse(this.x, this.y, 10, 10);
//   }
// }
//
// var ship;
//
// function setup(){
//   createCanvas(480, 120);
//   background(204);
//   ship = new Spaceship(width/2, height/2);
// }
//
// function draw(){
//   ship.move();
//   ship.display();
// }

//smiley face example

//constructor for smiley face
function Smiley(initX, initY, size, colorR, colorG, colorB){
  //properties location (x, y)
  this.x = initX;
  this.y = initY;
  this.size = size;
  this.R = colorR;
  this.G = colorG;
  this.B = colorB;
  //methods: smile()
  this.smile = function(){
    fill(this.R, this.G, this.B);
    ellipse(this.x, this.y, this.size, this.size);
    ellipse(this.x-this.size/4, this.y-this.size/4, 2, 2);
    ellipse(this.x+this.size/4, this.y-this.size/4, 2, 2);
    arc(this.x, this.y, this.size/2, this.size/2, 45, 135);
  }
}

var smiley1;
var smiley2;
var smiley3;

function setup(){
  createCanvas(480, 240);
  background(204);
  angleMode(DEGREES);
  smiley1 = new Smiley(width/2, height/2, 80, 140, 80, 230);
  smiley2 = new Smiley(100, 100, 40, 255, 255, 0);
  smiley3 = new Smiley(325, 50, 100, 255, 0, 0);
}

function draw(){
  smiley1.smile();
  smiley2.smile();
  smiley3.smile();
}
