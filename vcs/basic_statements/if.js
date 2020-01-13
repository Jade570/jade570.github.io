function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  fill(0);

  if (mouseIsPressed) {
    background(255,255,0);
  } else {
    background(255);
  }
}