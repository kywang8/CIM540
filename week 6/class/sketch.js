// // to know if any key is pressed, test the boolean variable "keyIsPressed"
// // the variable "key" contains the character/letter of the key that is pressed
// // "keyCode" variable is used for non-letter keys such as ALT, CONTROL, SHIFT, UP_ARROW, LEFT_ARROW, etc.
//
// function setup(){
//   createCanvas(600, 400);
// }
//
// // function draw(){
// //   text('H', 20, 20);
// //   text('E', 40, 40);
// //   text('L', 60, 60);
// //   text('L', 80, 80);
// //   text('O', 100, 100);
// // }
//
// //STAR WARS EXAMPLE
//
// function draw(){
//   background (0);
//   if(keyIsPressed){
//     if(key=='c'){
//   textAlign(CENTER);
//   fill(255, 255, 0);
//   textSize(30);
//   text('A NEW HOPE', 300, 30);
//   textSize(15);
//   text('It is a period of civil war.', 300, 50);
//   textSize(17);
//   text('Rebel spaceships, striking', 300, 70);
//   textSize(20);
//   text('from a hidden base, have won', 300, 90);
//   textSize(22);
//   text('their first victory against the evil', 300, 110);
//   textSize(30);
//   textAlign(LEFT);
//   text('Galactic Empire...', 100, 140);
// }
// else{
//   text('Go away, Darth Vader!', 150, 90);
// }
// }
// }

//
// function setup(){
//   createCanvas(480, 180);
//   fill(255, 255, 0);
//   textSize(20);
//   textAlign(CENTER);
// }
//
// function draw(){
//   background(0);
//   if(keyIsPressed){
//     if(keyCode==LEFT_ARROW){
//       text("left key is pressed.", width/2, height/2);
//     }
//     if(keyCode==RIGHT_ARROW){
//       text("Right key is pressed.", width/2, height/2);
//     }
//   }
// }

var x = 240;

function setup(){
  createCanvas(480, 240);
}
function draw(){
  if(keyIsPressed){
    if(keyCode==LEFT_ARROW){
      x = x -5;
    }
    if(keyCode==RIGHT_ARROW){
      x = x + 5;
    }
  }
  fill(255, 0, 0);
  //when key is pressed, the 3rd value has to be changed
  rect(0, 0, x, height);

  fill(0, 0, 255);
  //when key is pressed, the 1st and 3rd values have to be changed
  rect(x, 0, width-x, height);
}
