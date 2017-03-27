function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  background(204);
  for (var x = 0; x < width+80; x += 80) {
    for (var y = 0; y < height+120; y+= 120){
      fill(5);
      if (mouseX > x && mouseX < x + 80 && mouseY > y && mouseY < y +120) {
        randomcan(x,y);
      } else {
        can(x,y);
      }
    }
  }
}

function can(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill('#B6032A');
  rect(10, 20, 60, 35);
  fill('#FFFDF8');
  ellipse(40,20,60, 20);
  rect(10, 55, 60, 35);
  ellipse(40,90,60, 20);
  fill('#B6032A');
  ellipse(40,55,60, 20);
  pop();
}

function randomcan(x, y) {
  r = random(255);
  g = random(255);
  b = random(255);
  push();
  translate(x, y);
  noStroke();
  fill(r,b,g);
  rect(10, 20, 60, 35);
  ellipse(40,20,60, 20);
  rect(10, 55, 60, 35);
  ellipse(40,90,60, 20);
  ellipse(40,55,60, 20);
  pop();
}