var background,backgroundImg;
var sonic,sonicImg;
var stone,stoneImg;
var bullet,bulletImg;
var obstacle3,obstacle3Img;
var background1;
var ground;
var sonicJump,sonicJumpImg;

// Images Load
function preload(){
 backgroundImg= loadImage("background.png");
 stoneImg= loadImage("stone.webp");
 bulletImg= loadImage("bullet.png");
 sonicJumpImg= loadAnimation("jump1.png","jump2.png","jump3.png","jump4.png");
 sonicImg= loadAnimation("jog0.png","jog1.png","jog2.png","jog3.png","jog4.png","jog5.png","jog6.png","jog7.png","jog8.png","jog9.png","jog10.png",)
}


function setup(){
  createCanvas(displayWidth,displayHeight);

  background1=createSprite(200,450);
  background1.addImage(backgroundImg);
  background1.velocityX=-5

  sonic=createSprite(200,670,20,20);
  sonic.addAnimation("Running",sonicImg);
  sonic.scale=0.5
 
  ground=createSprite(150,800,200,10);
  ground.visible=false;

  
}

function draw(){
    background("black");
    sonic.collide(ground);

    if (background1.x<0){
        background1.x=200;
    }

    if (keyWentDown(UP_ARROW)){
        sonic.velocityY=-19;
        sonic.changeAnimation(sonicJumpImg);
    }

    if (keyWentUp(UP_ARROW)){
        sonic.velocityY=7;
    }

    spawnBullets();
    spawnStone();

    
drawSprites();

}

function spawnBullets(){
    if (frameCount%100===0){
 bullet=createSprite(displayWidth-20,400,20,20);
 bullet.y=Math.round(random(400,700));
 bullet.addImage(bulletImg);
 bullet.scale=0.1
 bullet.velocityX=-5;
    }
}

function spawnStone(){
    if (frameCount%300===0){
        stone=createSprite(displayWidth-200,700,20,20);
        stone.x=Math.round(random(displayWidth-200,displayWidth-50));
        stone.addImage(stoneImg);
       // stone.scale=0.1
        stone.velocityX=-5;
}
}