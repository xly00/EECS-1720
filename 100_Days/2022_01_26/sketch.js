let x = 0;
let y = 120;

function setup() {
  createCanvas(800, 350);
}

function draw() {
  background(188,225,252);
   if (x > 800) {
    x = 0;
   }
   if (y >= 600) {
    y = 0;
  }

  fill(135,206,235);
  ellipse(x, 50, 50, y);
  x = x + 1.1;
  describe('SkyBlue circle at x pos ' + round(x) + ' moving to the right');
   y = y + 1.2;
  describe('SkyBlue circle at y pos ' + round(y) + ' moving to the down');
}