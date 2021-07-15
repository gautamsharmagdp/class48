var thor, thor_moving;
var hulk, hulk_moving;
var ironman, iron_moving;
var captain, captain_moving;
var thanos,gumora,hella,ronan;

var bg;
var startbg;
var start2;
var enemy,enemyGroup;



 

function preload(){
  thor_moving=loadImage("avengers/thor.png");
  hulk_moving=loadImage("avengers/hulk.png");
  iron_moving=loadImage("avengers/iron.png");
  captain_moving=loadImage("avengers/captain.png");
   thanos=loadImage("enemies/thanos.png");
   gumora=loadImage("enemies/gumora.png");
   hella=loadImage("enemies/hella.png");
   ronan=loadImage("enemies/ronan.png");
  bg=loadAnimation("background/start.jpg");
  start=loadAnimation("background/battle.png");
  startButton=loadImage("background/start2.png");
  
  
}
function setup(){
  createCanvas(displayWidth,displayHeight);
 startbg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
 startbg.addAnimation("initial",bg);
 startbg.addAnimation("selection",start);
 startbg.scale=3;
 
 thor=createSprite(1450,550,20,20);
 thor.visible=false;
 thor.addImage(thor_moving);
 hulk=createSprite(580,displayHeight-300,20,20);
 hulk.addImage(hulk_moving);
 hulk.visible=false;
 hulk.scale=1.3;
 iron=createSprite(200,displayHeight-500,20,20);
 iron.addImage(iron_moving);
 iron.visible=false;
 captain=createSprite(1100,displayHeight-400,20,20);
 captain.scale=0.7;
 captain.visible=false;
 captain.addImage(captain_moving);
 start2=createSprite(displayWidth/2-100,displayHeight/2,20,20);
 start2.addImage(startButton);
 enemyGroup=createGroup();
 
  
}
function draw(){
  if(mousePressedOver(start2)){
    startbg.changeAnimation("selection");
    start2.visible=false;
    thor.visible=true;
    hulk.visible=true;
    iron.visible=true;
    captain.visible=true;
    enemies();
  controlAvengers();
  if(thor.isTouching(enemyGroup)){
  enemyGroup.destroyEach();
  }
}
  drawSprites();
   

}
function enemies(){
  if(frameCount%100===0){
  enemy=createSprite(displayWidth,random(100,displayHeight-200));
  enemy.velocityX=-8;
  enemy.lifetime=displayWidth/6;
  var x=Math.round(random(1,4));
  switch(x){
    case 1:enemy.addImage(thanos);
    break;
    case 2:enemy.addImage(gumora);
    break;
    case 3:enemy.addImage(hella);
    break;
    case 4:enemy.addImage(ronan);
    break;
    default:break;
  }
  enemyGroup.add(enemy);
  }
}
function controlAvengers(avenger){
  if(mousePressedOver(thor)){
    
    thor.visible=true;
    hulk.visible=false;
    iron.visible=false;
    captain.visible=false;
  
    if(keyDown("left")){
      thor.x=thor.x-5;
    }
    if(keyDown("right")){
      thor.x=thor.x+5;
    }
    if(keyDown("up")){
      thor.y=thor.y-5;
    }
    if(keyDown("down")){
      thor.y=thor.y+5;
    }
    
  }
  

  if(mousePressedOver(hulk)){
    
    hulk.visible=true;
    thor.visible=false;
    iron.visible=false;
    captain.visible=false;

      if(keyDown("left")){
      hulk.x=hulk.x-5;
    }
    if(keyDown("right")){
      hulk.x=hulk.x+5;
    }
    if(keyDown("up")){
      hulk.y=hulk.y-5;
    }
    if(keyDown("down")){
      hulk.y=hulk.y+5;
    }
  }
    
  if(mousePressedOver(ironman)){
    
    thor.visible=false;
    hulk.visible=false;
    iron.visible=true;
    captain.visible=false;
  
    if(keyDown("left")){
      iron.x=iron.x-5;
    }
    if(keyDown("right")){
      iron.x=iron.x+5;
    }
    if(keyDown("up")){
      iron.y=iron.y-5;
    }
    if(keyDown("down")){
      iron.y=iron.y+5;
    }
  }
  if(mousePressedOver(captain)){
    if(keyDown("left")){
      avenger.x=avenger.x-5;
    }
    if(keyDown("right")){
      avenger.x=avenger.x+5;
    }
    if(keyDown("up")){
      avenger.y=avenger.y-5;
    }
    if(keyDown("down")){
      avenger.y=avenger.y+5;
    }
  }
}