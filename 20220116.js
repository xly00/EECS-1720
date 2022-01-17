var w;
function setup() {
  createCanvas(850, 880);
  w = new Compose();
}
function draw() {
  background(105,150,238);
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
 if (mouseIsPressed){
   fill(0);
 }else{
   fill(255);
 }
    ellipse(mouseY,mouseX,69,88);
}
  
}