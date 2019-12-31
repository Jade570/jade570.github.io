let button;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
}

function draw() {
  colorMode(HSB);
  while (keyIsPressed === false && mouseIsPressed) {
    fill(random(255),50, 50);
  }

  fill(255);
  rect(25,25,50,50);
}


function spin(){


}

//to do list
/*
 1. make rectangle(not square)
 2. make spin function and make rect spin
 3. each time the spin func finishes, pause for a sec
 4. if breaks while make a "go back" button
*/
