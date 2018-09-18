var x = 240;
var y = 60;
var d = 10;

function setup(){
  createCanvas(480,120);
  background(204);
  noFill();
}

function draw(){
  for(var i = 1; i < 21; i++){
    //i++ is i=+1, for larger increments i=+2, etc.
    ellipse(x, y, i*d, i*d);
  }
}

//---BREAK----

function draw(){
for(var i=1; i < 5; i++){
  rect (i*d, d, 10, 10);
  }
}

//---BREAK----

function setup(){
  for(var i=1; i<9; i++){
    print(i);
  }
}

function draw(){
  for(var i=1; i < 25; i++){
    rect (i*d, d, 10, 50);
  }
}

//----BREAK----

function setup(){
  createCanvas(480, 120);
  strokeWeight(2);
}

function draw(){
  background (204);
  for (var i = 20; i < 400; i+=20) {
    line (i, 0, i + i/2, 80);
    fill (255, 0, 0);
    ellipse (i + i/2, 80, 10, 10);
  }
}

//---BREAK---- Loop in a Loop


function setup(){
  for(var i = 1; i < 5; i++){
    for(var j= 1; j < 3; j++){
      print(i,j);
    }
  }
}

//----BREAK

var d= 10;

function setup(){
  createCanvas(480,120);
  background(204);
  noFill();
}

function draw(){
  line (0, 20, 480, 20);
  for(var i = 1; i<61; i+=2){
    ellipse(d*i, 20, d, d);
  }
}

//----adding another variable

var d= 10;
var y = 20;

function setup(){
  createCanvas(480,120);
  background(204);
  noFill();
}

function draw(){
  line(0, y, 480, y);
  for(var i = 1; i <61, i+=2){
    ellipse(d*i, y, d, d);
  }
}

// putting the loop in another Loop

var d = 10;
var y = 20;

function setup(){
  createCanvas(480,120);
  background(204);
  noFill();
}

function draw(){
  for(var j = 1; j < 6; j+=2){
    line(0, y*j, 480, y*j);
    for(var i = 1; i<61; i+=2){
      ellipse(d*i, y*j, d, d);
    }
  }
}

----BREAK---

var d = 50;

function setup(){
  createCanvas(480,120);
  background(0);
}

function draw(){
  for(var j=0; j<10; j++){
  for(var i=0; i<20; i++){
    ellipse(i*d, j*d, d, d);
  }
 }
}
