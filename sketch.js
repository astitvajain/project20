var car, wall;
var speed, height;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  height=random(400,1500)
  car=createSprite(200,200,50,50);
  car.velocityX = speed;
  wall=createSprite(800,200,60,height/2)
  wall.shapeColor=color(80,80,80)
  
  
}

function draw() {
  background("black");  
  if(wall.x-car.x<(car.width+wall.width)/2){
    var deformation=0.5 * height * speed* speed/22509;
    if (deformation>180){
      car.velocityX = 0;
      car.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation>100){
      car.velocityX = 0;
      car.shapeColor=color(230,230,0);
    }
    if (deformation<100){
      car.velocityX = 0;
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}