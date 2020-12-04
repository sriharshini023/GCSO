var car,wall
var speed,weight;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car=createSprite(500,200,50,50 )
   wall=createSprite(1500,200,60,height/2)
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed
}

function draw() {
  background(255,255,255);  
if(wall.x-car.x<(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180);
{
car.shapeColour=colour(250,0,0);
}
if(deformation<180&&deformatiom>100)
{
  car.shapeColour=colour(230,230,0);
}
if(deformation<180)
{
  car.shapeColour=colour(0,255,0)
}
}
  drawSprites();
}