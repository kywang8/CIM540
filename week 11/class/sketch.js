// //ARRAYS

var x = [];
var y = [];
var hit = [];

function setup(){
  createCanvas(480, 240);
  angleMode(DEGREES);
  for (var i = 0; i < 10; i++){
    x[i] = random(20, width-20);
    y[i] = random(20, height-20);
    hit[i] = 0;
  }
}

function draw(){
  background(0);
  fill(255, 255, 0);
  for(var i = 0; i < 10; i++){
    if(hit[i] == 0){
    arc(x[i], y[i], 20, 20, 45, 315);
  }
}
if(mouseIsPressed){
  for(var i = 0; i < 10; i++){
    if(mouseX >(x[i]-10) && mouseX<(x[i]+10) && mouseY>(y[i]-10) && mouseY<(y[i]+10)){
      hit[i] = 1;
      }
    }
  }
}

//MARIO ANIMATION

var images = [];
var curIndex = 0;
function preload(){
  images[0] = loadImage('images/mario1.PNG');
  images[1] = loadImage('images/mario2.PNG');
  images[2] = loadImage('images/mario3.PNG');
}

function setup(){
  createCanvas(480, 240);
  background(255);
  frameRate(5);
}

function draw(){
  image(images[curIndex], width/2, height/2);
  curIndex += 1;
  if(curIndex >= images.length){
    curIndex = 0;
  }
}

//MARIO WITH MUSIC

// var music;
//
// var images = [];
// var questionMark;
// var x = 400;
// var curIndex = 0;
//
// function preload(){
//   images[0] = loadImage('images/mario1.PNG');
//   images[1] = loadImage('images/mario2.PNG');
//   images[2] = loadImage('images/mario3.PNG');
//   questionMark = loadImage('question.jpg');
//   music = loadSound("Super Mario Bros Soundtrack.mp3")
//   music.setLoop(true);
// }
//
// function setup(){
//   createCanvas(480, 240);
//   frameRate(5);
//   music.play();
// }


//playing sound as acknowledgement

// var img1;
// var img2;
// var sound;
// var count = 0;
//
// function preload(){
//   img1 = loadImage('turkey1.jpg');
//   img2 = loadImage('turkey2.jpg');
//   sound = loadSound('Turkey Gobble.mp3');
// }
//
// function setup(){
//   createCanvas(480, 240);
// }
//
// function draw(){
//   background(204);
//   if(count <= 0){
//     image(img1, 120, 0, 240, 240);
//   } else {
//     count -=1;
//     image(img2, 120, 0, 240, 240);
//   }
//   if(mouseIsPressed){
//     sound.play();
//     count = 30;
//   }
// }


//getting sound from microphone

var img;
var mic;
var amp;
var scale;

function preload(){
  img = loadImage('images/moai.jpg');
}

function setup(){
  createCanvas(260, 360);
  mic = new p5.AudioIn();
  mic.start();
  amp = new p5.Amplitude();
  amp.setInput(mic);
}

function draw(){
  background(0);
  image(img, 20, 0, 220, 360);
  fill(0);
  scale = amp.getLevel();
  ellipse(130, 240, 60, 40*scale);
}
