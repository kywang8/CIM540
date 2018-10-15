var field;
var receiver;
var button;
var football;
var x = 50;
var pressed = 0;
var clear;
var confetti;

function preload(){
  field = loadImage('football field.jpg');
  receiver = loadImage('wide receiver.png');
  football = loadImage('football.png');
  obj = loadImage('obj.png');
  confetti = loadImage('confetti.png');
}

function setup(){
  createCanvas(600, 400);

  button = createButton('SCORE');
  button.position(20, 50);
  button.mousePressed(textAppear);

  button = createButton('CLEAR');
  button.position(500, 50);
  button.mousePressed(back);
}

function textAppear(){
  pressed = 1;
}

function back(){
pressed = 0;
}

function draw(){
  image(field, 0, 0);
  tint(255);
  image(receiver, mouseX, 150, 200, 200);

  image(football, x, 125, 35, 35);
  if(keyIsPressed){
    if(keyCode==LEFT_ARROW){
      x = x-20;
    }
  if(keyCode==RIGHT_ARROW){
    x = x + 20;
  }
  }
  if(pressed){
    image(field, 0, 0);
    tint(255);
    image(obj, mouseX, 150, 200, 200);
    image(confetti, 0, 0, 600, 400);
    textAlign(CENTER);
    textSize(50);
    fill(255, 255, 0);
    text('TOUCHDOWN', 300, 100);
  }
}
