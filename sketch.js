hr = hour();
min = minute();
sec = seconds();
var scAngle, minAngle , hrAngle

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  scAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(min,0,0,60,360);
  hrAngle = map(hr,12,0,0,360);
}

function draw() {
 // Second hand 
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();


// Minute hand 
push();
rotate(minAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,100,0);
pop();

// hour hand 
push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,100,0);
pop();


  background(0,0,0);  
  drawSprites();
}