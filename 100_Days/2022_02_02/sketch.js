function setup() {
  createCanvas(500, 480);
}

function draw() {
  background(95, 88, 162);

  push();
 translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  polygon(10, 25, 88, 20);
  pop();
  
   push();
 point(width * 0.5, height * 0.5);
  rotate(frameCount / 52.0);
  polygon(95,95, 8, 8);
  pop();
  
 
}

function polygon(x, y, radius, npoints) {
  if (mouseIsPressed){
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0.05; a < TWO_PI; a += angle) {
    let sx = y + cos(a) * radius;
    let sy = x + sin(a) * radius;
    vertex(sy, sx);    
  }
  } else {
    let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0.05; a < TWO_PI; a += angle) {
    let sx = y + cos(a) * radius;
    let sy = x + sin(a) * radius;
    vertex(sy, sy);   
  }
  }
  endShape(CLOSE);
}
