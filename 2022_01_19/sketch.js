var w;
var c;
function setup() {
  createCanvas(180, 180);
  w = new Compose();
  c = new Compose2();

}
function draw() {
  background(120,195,188);
  w.update();
  w.display();
  c.update2();
  c.display2();
}
  
function Compose() {  
    this.pos =  createVector(width/2,height/2);
  this.update = function(){
    var center =createVector(mouseX,mouseY);
    this.pos.sub(center);
  }
  this.display  = function(){ 
  translate(width/2,height/2);
  strokeWeight(9);  
  stroke(220,235,88);
  line(9,9,this.pos.x,this.pos.y);
      line(9,9,this.pos.x,this.pos.x);
    line(9,9,this.pos.y,this.pos.y);
  }
}
  
function Compose2() {  
  this.update2 = function(){
      var center2 =createVector(mouseY,mouseX);
   
  }
  this.display2  = function(){ 
  if (mouseIsPressed){
  fill(0);
   stroke(0);
 }else{
   
    fill(120,195,1880);
    stroke(120,195,188);
 }
    strokeWeight(1);
    let names = '12,3,6,9';
    let splitString = split(names, ',');
    text(splitString[0], -12, -72);
    text(splitString[1], 77, 5);
    text(splitString[2], -5, 78);
    text(splitString[3], -82, 5);
    
  }
}
