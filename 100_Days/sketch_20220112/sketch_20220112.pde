float x = 180;
float y = 100;
float xspeed = 2.5;
float yspeed = 2;

void setup() {
  size(800, 800);
  smooth(1);
}

void draw() {
  background(228);



  x = x + xspeed;
  y = y + yspeed;

  if ((x > width) || (x < 0)) {
    xspeed = xspeed * - 1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * - 1;
  }



  stroke(28);
  strokeWeight(8);
  fill(128);
  ellipse(x, y, 58, 52);
}
