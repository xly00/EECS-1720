let a = 80; 
function setup() {
  createCanvas(480, 550);
  background(0);
  stroke(255,239,218);
  noLoop();
}

function draw() {
  arc(a, a, 90, 90, 0, PI + QUARTER_PI, PIE);
   
  for (let a = 120; a < 140; a += 3) {
      arc(a, a, 90, 90, 0, PI + QUARTER_PI, PIE);
     fill(88,188,255);
  }
   
  for (let a = 180; a < 190; a += 3) {
      arc(a, a, 90, 90, 0, PI + QUARTER_PI, PIE);
     fill(255,240,245);
  }

  drawAnotherArc();
   drawAnotherArc();
  drawYetAnotherArc();  
}

function drawAnotherArc() {
  let a = 320;
  let b =295;
   arc(a, a, b, b, 0, PI + QUARTER_PI, PIE);
  fill(72,61,139);
  }

function drawYetAnotherArc() {
    arc(a, a, 95, 10, 0, HALF_PI, PI);
   fill(255,222,173);
 }