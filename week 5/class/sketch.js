function setup(){
  createCanvas(480,120);
  fill(255, 0, 0, 100);
  noStroke();
}

function draw(){
  background (0);
  rect(mouseX, mouseY, 10, 10);
  line (mouseX, mouseY, pmouseX, pmouseY);
}

//Only draw the current position: repaint background every time before we draw the dot
//background in function draw makes drawing only where mouse is at one time

function setup(){
  createCanvas(480,120);
  background (204);
}

function draw(){
  stroke (255, 0, 0, 100);
  strokeWeight(10);
  line (mouseX, mouseY, pmouseX, pmouseY);
  noStroke();
  ellipse(mouseX, mouseY, 10, 10);
}

//IF ELSE STATEMENTS

if ( ) {
//do something if the condition is true
} else {
  //do something else if false
}

var draw_rect = true;
if(draw_rect){
  rect(10, 10, 10, 10);
}

var a_boolean_variable = true;

if(a_boolean_variable){
  rect(10, 10, 10, 10);
} else{
  ellipse(10, 10, 10, 10);
}

//EXAMPLE

function setup(){
  createCanvas(480, 120);
  background(204);
  noStroke();
}

function draw(){
if(mouseY<40){
  fill(255, 0, 0);
} else{
  fill(0, 0, 255);
}
ellipse(mouseX, mouseY, 10, 10);
}

function setup(){
  createCanvas(480, 120);
  background(204);
  noStroke();
}

function draw(){
if(mouseY<40){
  fill(255, 0, 0);
} else{
  if(mouseY<80){
    fill(0, 0, 255);
  } else{
    fill(0, 255, 0);
  }
  }
ellipse(mouseX, mouseY, 10, 10);
}

function draw(){
  if(mouseY<1){
    fill(204);
  } else{
    if(mouseY<40){
      fill(255, 0, 0);
    } else{
      if(mouseY<80){
        fill(0,0,255);
      } else{
        fill (0, 255, 0);
      }
    }
  }
  ellipse(mouseX,mouseY, 10, 10);
}

function setup(){
  createCanvas(480, 120);
  background(204);
}

function draw(){
  fill(255, 0, 0);                //this is the same as the other function(draw) below
  if(mouseIsPressed){
    fill(0, 255, 0);
  }
  ellipse(240, 60, 50, 50);
}

function draw(){
  if(mouseIsPressed){
    fill(0, 255, 0);
  } else{
    fill(255, 0, 0);
  }
  ellipse(240, 60, 50, 50);
}

function setup(){
  createCanvas(480, 120);
  background(204);
}

function draw(){
  fill(255, 0, 0);
  if(mouseIsPressed) {
   if(mouseButton == LEFT){
    fill(0, 255, 0);
  } else if(mouseButton == RIGHT){
    fill (255, 255, 0);
  }
}
    ellipse (240, 60, 50, 50);
  }
