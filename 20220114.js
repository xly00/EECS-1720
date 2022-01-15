var w;

function setup() {
  createCanvas(520, 520);
  w = new Compose();
}

function draw() {
  background(119,185,238);
  w.update();
  w.display();
}
function Compose(){
  this.pos = createVector(width /2 , height / 1.5);
  
  this.update = function(){
    var vel = createVector(random(-6,6), random(-6,6));
    this.pos.add(vel);
    }
  this.display  = function(){
    fill(230,230,251);
    rect(this.pos.y, 52, this.pos.x, 52);
    translate(width/2,height/2);
    strokeWeight(2);
    stroke(0);
    line(0,0,this.pos.x,this.pos.y);
  }
} 