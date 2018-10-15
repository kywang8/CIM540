// var defense2;
// var defense;
// //
// // function preload(){
// //   defense2 = loadImage('3-4 defense.PNG');
// //   defense = loadImage('4-3 defense.PNG');
// // }
// //
// // function setup(){
// //   createCanvas(480, 240);
// // }
// //
// function draw(){
//   background(204);
//   image(defense2, mouseX, mouseY, 240, 120);
//   image(defense, 240, 120, 240, 120);
// }

// //
//
//

// var grass;
// var defense;
//
// function preload(){
//   grass = loadImage('grass.jpg');
//   defense = loadImage('3-4 defense.PNG');
// }
//
// function setup(){
//   createCanvas(480, 500);
// }
// // //
// function draw(){
//   image(grass, 0, 0);
//   tint(255, 50);
//   image(defense, 0, 0, 480, 300);
// }
//
// function draw(){
//   tint(255);
//   image(grass, 20, 50, 200, 100);
//   // grass in red
//   tint(255, 0, 0);
//   image(grass, 200, 50, 200, 100);
//   //grass in blue
//   tint(0, 0, 255);
//   image(grass, 400, 50, 200, 100);
// }

// PENDULUM SWINGING BACK AND FORTH
//
// angle = 0;
// direction = 1;
//
// function setup(){
//   createCanvas(240, 240);
//   angleMode(DEGREES);
// }
//
// function draw(){
//   background(204);
//   strokeWeight(2);
//   line(80, 80, 160, 80);
//
// push();
// if(angle == 90){
//   direction = -1;
// }
// if(angle == -90){
//   direction = 1;
// }
// angle = angle + 5*direction;
// translate(120, 80);
// rotate(angle);
// strokeWeight(10);
// line(0, 0, 0, 80);
// pop();
// }

// BREAK: CREATE BUTTONS
// 1) CREATE BUTTON
// 2) CREATE FUNCTION THAT WILL PERFORM TASK
// 3) REGISTER FUNCTION TO BUTTONS

// var button;
//
// function setup(){
//   createCanvas(240, 240);
//   background(205);
//
//   button = createButton('click');
//   button.position(200, 200);
// }

//BREAK
//
// var button;
// var count = 0;
//
// function setup(){
//   createCanvas(240, 240);
//   textSize(24);
//   textAlign(CENTER);
//   fill(255);
//
//   button = createButton('+');
//   button.position(150, 200);
//   button.mousePressed(increaseCount);
//
//   button = createButton('-');
//   button.position(25, 200);
//   button.mousePressed(decreaseCount);
// }
//
// function increaseCount(){
//   count += 1;
// }
//
// function decreaseCount(){
//   count -= 1;
// }
//
// function draw(){
//   background(0);
//   text(count, 120, 120);
// }

//BREAK
//
var buttonDown;
var buttonUp;
var count = 120;

function setup(){
  createCanvas(240, 240);

  buttonUp = createButton('Down');
  buttonUp.position(180, 200);
  buttonUp.mousePressed(moveUp);

  buttonDown = createButton('Up');
  buttonDown.position(0, 200);
  buttonDown.mousePressed(moveDown);
}

function moveUp(){
  count += 5;
}

function moveDown(){
  count -= 5;
}

function draw(){
  background(205);
  fill(0, 255, 255);
  ellipse(120, count, 30, 30);
}

//CREATE A CLEAR BUTTON

// var button;
//
// function setup(){
//   createCanvas(240, 240);
//   background(204);
//   noStroke();
//
//   button = createButton('Clear');
//   button.position(180, 200);
//   button.mousePressed(back);
// }
//
// function back(){
//   createCanvas(240, 240);
//   background(204);
// }
//
// function draw(){
//   ellipse(mouseX, mouseY, 10, 10);
// }
