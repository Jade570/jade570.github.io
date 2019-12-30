function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  if (mouseIsPressed) {
    background(0);
  } else {
    background(255);
  }
}