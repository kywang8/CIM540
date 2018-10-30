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


function setup(){
  createCanvas(480, 120);
  textSize(24);
  textAlign(CENTER);
  background(204);
  var number = rollDice();
  if(number == 1){
    fill(255, 0, 0);
  } else if(number == 2){
    fill(0, 0, 255);
  } else if(number == 3){
    fill(0, 255, 0);
  } else{
    fill(255, 0, 255);
  }
  rect(100, 10, 50, 50);
}

function rollDice(){
  var number = 1+int(random(4));
  return number;
}

//use function to draw multiple Rubik's cubes with random colors for each square

???
