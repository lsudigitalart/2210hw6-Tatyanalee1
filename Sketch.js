var img1;
var img2;

function preload() {
  img1 = loadImage("img/selfie.jpg");
  img2 = loadImage("img/treats.jpg");
}
function setup() {
  createCanvas(720, 400);
  textFont("Arial");
}

function draw() {
  image(img1, 0,0, 720, 400);
  textSize(30);
  fill(255);
  stroke(0);
  text("LET ME TAKE A SELFIE!!", 0, 200);

  //if mouse is pressed  you get a different picture
  if (mouseIsPressed) {
    if (mouseButton == LEFT)
      image(img2, 0, 0, 720, 400);
      tint(255, 126);
    if (mouseButton == RIGHT)
      textSize(32);
      fill(255);
      stroke(0);
      text("HAHA!", 200, 100);
      text("BOO!", 350, 300);
  }

}
