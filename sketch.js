function setup() {
  createCanvas(600, 600);
  background(220);
}

function draw() {
  // creates the grey rectangle in the upper left corner
  fill("blue");
  stroke("grey");
  rect(0, 0, 100, 20);

  // sets the color of the text
  fill("white");
  stroke("white");
  strokeWeight(1);

  // writes the text of the current coordinates in the corner
  text("x: " + mouseX + " y: " + mouseY, 10, 15);
  fill("#36896E");
  // Draw
  if (mouseIsPressed) {
    fill("#030C3A");
    rect(mouseX, mouseY, 14, 12);
  }
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
