var b;
var score = 0;
var pt;

function setup() {
  createCanvas(600, 400);
  b = new bubble();
}

function draw() {
  background(0);
  b.update();
  if (b.r === 0) {
    b = new bubble();
    score -= 5;
  }
  b.display();
  textSize(32);
  fill(255, 200);
  text(score, 10, 30);
  if (pt) {
    pt.update();
    pt.display();
  }
}

function mousePressed() {
  var scoreAmount = b.clickPoint(mouseX, mouseY);
  score += scoreAmount;
  pt = new pointsText(scoreAmount);
  b = new bubble();
  //redraw();
}
