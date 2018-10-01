
function setup(){
  createCanvas(480, 120);
  background(204);
}

function draw(){
  if(mouseIsPressed && mouseX>=90 && mouseX<=90+60 && mouseY>= 30 && mouseY<=30+60)
  {
  isOverRectangle = true;
  fill(255, 0, 0);
}  else  {
    isOverRectangle = false;
    fill(255);
  }
    rect (90, 30, 60, 60);

    if(mouseIsPressed && mouseX>=330 && mouseX<=330+60 && mouseY>=30 && mouseY<= 30+60)
    {
      isOverRectangle = true;
      fill(0, 255, 0);
    } else{
      isOverRectangle=false;
      fill(255);
    }
    rect(330, 30, 60, 60);
  }
