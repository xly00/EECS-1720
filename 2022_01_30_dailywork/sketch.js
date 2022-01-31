let checkbox, button, colBG, colFill, colRG;

function setup() {
  createCanvas(480, 480);

  button = createButton('Colorize if loop()');
  button.position(0, 500);
  button.mousePressed(changeBG);

  checkbox = createCheckbox('loop()', true);
  checkbox.changed(checkLoop);

  colBG = color(0);
  colFill = color(255);
   colRG= color(255);
}

function changeBG() {
  if (isLooping()) {
    colBG = color(random(255), random(255), random(255));
    colFill = color(random(255), random(255), random(255));
    colRG = color(random(255), random(255), random(255));
  }
}

function checkLoop() {
  if (this.checked()) {
    loop();  
  } else {
  noLoop();
  }
}

function draw() {
  background(colBG);
  if(mouseIsPressed){
  fill(colFill);
   stroke(colRG);
  quad( width / 2, height / 2, width / 2,height / 2, random(258),  random(258),  random(258),  random(258));
  quad( random(255),  random(255),  random(255),  random(255), random(255),  random(255),  random(255),  random(255));
  quad( random(88),  random(66),  random(888),  random(69), random(95),  random(222),  random(28),  random(99));
   fill(colRG);
   stroke(colFill);
  square(288, 288, 55, 10);
  }else{
      fill(colRG);
   stroke(colFill);
  square(288, 288, 55, 10);
  }
}