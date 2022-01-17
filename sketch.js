var spaceShip,spaceShipimg,starryNight,starryNightimg

function preload() {
  spaceShipimg=loadImage("space ship.png")
  starryNightimg=loadImage("starry-night.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  starryNight=createSprite(width/2,height/2,width,height)
  starryNight.addImage("stars",starryNightimg)
  starryNight.scale=2.2
  spaceShip=createSprite(width/2,height-100,10,10)
  spaceShip.addImage("Ship",spaceShipimg)
  spaceShip.scale=0.2
}

function draw() {
  background(220);
  if(keyDown(UP_ARROW)){
	  spaceShip.y=spaceShip.y-2
  }
  if(keyDown(DOWN_ARROW)){
	spaceShip.y=spaceShip.y+2
}
if(keyDown(LEFT_ARROW)){
	spaceShip.x=spaceShip.x-2
}
if(keyDown(RIGHT_ARROW)){
	spaceShip.x=spaceShip.x+2
}
  drawSprites()
}