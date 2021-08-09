var background1,back2,spike,plat1,plat2,plat3,plat4,back1,laser,ball,ball1,next;
var ground1,ground2,invisible;
function preload(){
  spike = loadImage("unnamed.png");
  plat1 = loadImage("plat1.png");
  plat2 = loadImage("2.png");
  plat3 = loadImage("3.png");
  plat4 = loadImage("4.png");
  background1 = loadImage("5.jpg");
  laser = loadImage("laser1.png");
  ball = loadImage("player.png");
  next = loadImage("next.png");

}
function setup() {
  createCanvas(900,650);

back2 = createSprite(400,250);
back2.addImage(background1);
back2.velocityX = -7;
back2.scale=1.09;
invisible = createSprite(450,640,900,10);
invisible.visible = false;

ball1 = createSprite(45,620);
ball1.addImage(ball);
ball1.scale = 0.5;
//ball1.debug=true;
ball1.setCollider("circle",0,0,60)
 
}

function draw() {
  background(255,255,255);  
  if(back2.x<0){
    back2.x=back2.width/2;
  }
  ball1.collide(invisible);
if(keyDown("UP_ARROW")){
  ball1.velocityY= -6;
}
ball1.velocityY=ball1.velocityY+0.5
  drawSprites();
}