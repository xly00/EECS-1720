var w;
function setup() {
  createCanvas(580, 580);
  w = new Compose();
}
function draw() {
  background(120,195,188);
  w.update();
  w.display();
}
  
function Compose() {  
    this.pos =  createVector(width/2,height/2);
  this.update = function(){
    var center =createVector(mouseX,mouseY);
    this.pos.sub(center);
  }
  this.display  = function(){ 
  translate(width/2,height/2);
  strokeWeight(2);
  stroke(220,235,88);
  line(0,0,this.pos.x,this.pos.y);
  }
}