function bubble() {
  this.r = 100;
  this.innerR = 55;
  this.x = random(this.r, width - this.r);
  this.y = random(this.r, height - this.r);
  this.shrinkSpeed = 1;
  this.shrinkAcceleration = 0.1;

  this.update = function() {
    this.r -= this.shrinkSpeed;
    if (this.r < 0) {
      this.r = 0;
    }
    this.innerR -= this.shrinkSpeed;
    if (this.innerR < 0) {
      this.innerR = 0;
    }
    this.shrinkSpeed += this.shrinkAcceleration;
  }

  this.display = function() {
    stroke(255);
    fill(255, 50);
    ellipse(this.x, this.y, this.r, this.r);
    fill(255, 100);
    ellipse(this.x, this.y, this.innerR, this.innerR);
  }

  this.clickPoint = function(x, y) {
    var d = dist(this.x, this.y, x, y);
    console.log(d + ' <= ' + this.r);
    if (d <= this.innerR) {
      return 10;
    } else if (d <= this.r) {
      return 3;
    } else {
      return -3;
    }
  }
}
