function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(50,180,25);

  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 100.0);
  fill(100, 50, 100);
  star(0, 0, 20, 100, 4);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 70.0);
  fill(200, 30, 0);
  star(0, 0, 80, 100, 3);
  pop();

  push();
  translate(width * 0.8, height * 0.5);
  rotate(frameCount / -100.0);
  fill(250,10,200);
  star(0, 0, 50, 70, 6);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
