var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground, groundImage;
var bananaGroup, obstacleGroup
var score;


function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10)
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  score = 0;
}


function draw() {
  background(180);
  
  
  stroke("red");
  text("Survival Time: "+ score, 300,50);
   if(keyDown("space")&& (monkey.y>=(314.2))) { 
      monkey.velocityY = -15;
    }
    monkey.velocityY = monkey.velocityY + 0.8
  
    monkey.collide(ground);

    score = score + Math.round(getFrameRate()/60);
    
    Bananas();
    Obstacles(); 
    
  
  drawSprites();
}
    
function Bananas() {
  
  if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200, 250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    bananaGroup.add(banana);
  }
}
function Obstacles(){
 if (frameCount % 300 === 0){
    obstacle = createSprite(600,330,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1       
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
 }
}






