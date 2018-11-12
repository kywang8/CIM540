function Moai(initX, initY, size){

  this.x = initX;
  this.y = initY;
  this.size = size;
  this.build = function(){
    fill(179, 179, 179);
    rect(this.x, this.y, 75, 125);
    fill(89, 89, 89);
    ellipse(this.x+20, this.y+50, 20, 70);
    ellipse(this.x+50, this.y+30, 20, 20);
    triangle(this.x+75, this.y+75, this.x+95, this.y+75, this.x+75, this.y+30);
    line(this.x+75, this.y+100, this.x+60, this.y+100);
  }
}

var field;
var Moai1;
var Moai2;
var Moai3;
var Moai4;
var Moai5;

function preload(){
  field = loadImage('images/field.jpg');
}

function setup(){
  createCanvas(700, 600);
  Moai1 = new Moai(50, 425);
  Moai2 = new Moai(175, 400);
  Moai3 = new Moai(300, 375);
  Moai4 = new Moai(425, 350);
  Moai5 = new Moai(550, 325);
}
//
function draw(){
  image(field, 0, 0, 1000, 700);
  Moai1.build();
  Moai2.build();
  Moai3.build();
  Moai4.build();
  Moai5.build();
}
