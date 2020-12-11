const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box2
var box1
var ground
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  box1 = new Box(250,320,50,100); 
  box2 = new Box(370,180,30,50) 
  ground = new Ground(200,390,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display();
   box2.display();
   ground.display();
   
}