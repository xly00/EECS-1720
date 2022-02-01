
function setup() {
  createCanvas(480, 480);
    background(175,238,238);
}


function draw() {
  stroke(220,20,60);
  fill(225,255,255);
  square(288, 288, random(55), 12);
   fill(245,255,250);
   stroke(240,128,128);
  square(88, 288, random(55), 22);
  stroke(255, 122, 82);
  fill(216,191,216);
  square(88, 88, 55, random(22));
  stroke(25,25,112);
  square( 288, 88, 55, random(32));
  
   stroke(110, 150, 180);
   fill(255,228,225);
  square(random(480), random(480), random(30),random(30));
}