
var bgImg;
var spaceShip,spaceShipImg;
var initial1, initial2, initial3;
var initial1Img, initial2Img, initial3Img;

function preload(){
  
  bgImg=loadImage("images/bg.jpg");
  spaceShipImg=loadImage("images/spaceShip.png");
  initial1Img=loadImage("images/initial-1.png");
  initial2Img=loadImage("images/initial-2.png");
  initial3Img=loadImage("images/initial-3.png");

  
  
  
}



function setup() {
  createCanvas(800,600);
  
  bg=createSprite(400,300,800,600);
  bg.addImage("bg",bgImg);
  bg.scale=5.4;
  bg.velocityX=-4;
  
  spaceShip=createSprite(100,500,20,20);
  spaceShip.addImage("spaceShip",spaceShipImg);



  }
function draw() {
  background("darkblue");
  
  if(bg.x<0){
    bg.x=bg.width;
  }

  if(keyDown(UP_ARROW)){
    spaceShip.velocityY=-3;
  }
  if(keyDown(DOWN_ARROW)){
    spaceShip.velocityY=3;
  }
  asteroid();
 drawSprites();   
}

function asteroid(){

 if(frameCount%80===0){
  initial1=createSprite(random(400,800),random(100,500),20,20);
  initial1.addImage("initial1",initial1Img);
  initial1.scale=0.4;
  initial1.velocityX=random(-2,-5);
   
 }

}