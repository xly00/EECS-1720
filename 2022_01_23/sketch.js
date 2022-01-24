function setup() {
  createCanvas(800, 420);
}

function draw() {
  background(0);
  noFill();

  stroke(8, 225, 158);
  line(0, height * 0.11, width, height * 0.11);
   stroke(8, 225, 158);
  line(0, height * 0.88, width, height * 0.88);
   stroke(252, 158, 88);
  quad(width * 0.25, 88, height * 0.12, 82, 28, width * 0.5,  96, height * 0.52);
  stroke(252, 158, 88);
  quad( height * 0.52,  96, width * 0.5, 28, 82, height * 0.12, 88,width * 0.25);

  if (mouseIsPressed){
  stroke(158,88, 252);
  circle(590, 180, 52);    
  stroke(100,149,237);   
  circle(520, 180, 22);
  circle(658, 180, 22);
 circle(590, 238, 22);
  circle(590, 120, 22);
    
  stroke(255,215,0);
   fill(253,245,230);  
   quad(width * 0.25, 88, height * 0.12, 82, 28, width * 0.5,  96, height * 0.52);
  quad( height * 0.52,  96, width * 0.5, 28, 82, height * 0.12, 88,width * 0.25);

 }else{
 fill(255,228,218);
 stroke(128,255,255);
 ellipse(496,188, height * 0.25,width * 0.25);
   
 

 }
}
