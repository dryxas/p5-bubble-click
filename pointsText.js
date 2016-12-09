function pointsText(points) {
  this.x = mouseX;
  this.y = mouseY;
  this.fadeSpeed = 10;
  this.alpha = 255;
  this.text = points;

  this.update = function() {
    this.alpha -= this.fadeSpeed;
    if (this.alpha <= 0) {
      this.alpha = 0;
      this.fadeSpeed = 0;
    }
  }

  this.display = function() {
    fill(255, this.alpha);
    noStroke();
    textSize(24);
    text(this.text, this.x, this.y);
  }
}
