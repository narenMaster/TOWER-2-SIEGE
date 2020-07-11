const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,polygon, ground ,engine;

function setup() {
  createCanvas(800,400);

    engine = Engine.create();
     world = engine.world;

  //createSprite(400, 200, 50, 50);

 ground = new Ground(600,100,100,20);

 polygon = Matter.Bodies.polygon(100, 300, 6, 20,)


 b1 = new Block(630,235,30,40);
b2 = new Block(660,235,30,40);
b3 = new Block(690,235,30,40);
b4 = new Block(720,235,30,40);
b5 = new Block(750,235,30,40);
b6 = new Block(660,195,30,40);
b7 = new Block(690,195,30,40);
b8 = new Block(720,195,30,40);
b9 = new Block(390,155,30,40);




}

function draw() {
  background(255,255,255);  
  //Engine.update(engine);
  ground.display();
  block1.display();

drawsprites();
  
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  SlingShot.fly();
}
function keyPressed(){
if(keyCode === 32){
SlingShot. attach(polygon.body);

}

}
