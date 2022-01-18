let y = 240;
let x = 210;

function setup() {
  createCanvas(820, 800);
  frameRate(88);
}

function draw() {
  background(0);
  y = y - 8.5 ;
  if (y < 0) {
    y = height;
  }
   x = x - 2.8 ;
  if (x <= 0) {
    x =width;
  }
  rect(y*0.6, x/2, x*0.8, y-2.8);
  fill(200,188,255);
}
