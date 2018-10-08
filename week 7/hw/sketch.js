var field
var player


function preload(){
  field = loadImage('field.jpg');
  player = loadImage('player.png');
}

function setup(){
  createCanvas(600, 500);
}

function draw(){
  image(field, 0, 0);
  tint(255);
  image(player, mouseX, 150, 200, 200);
}


// function draw(){
//   background(204);
//   image(defense2, mouseX, mouseY, 240, 120);
//   image(defense, 240, 120, 240, 120);
// }
