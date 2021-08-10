const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var up_arrow,right_arrow;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
var ball_opt={
  restitution:0.95
}
  ball=Bodies.circle(200,100,20,ball_opt)
  World.add(world,ball);

  up_arrow=createImg("up.png");
up_arrow.position(200,50);
up_arrow.size(50,50);
up_arrow.mouseClicked(Vforce);

right_arrow=createImg("right.png");
right_arrow.position(100,50);
right_arrow.size(50,50);
right_arrow.mouseClicked(Hforce);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
ellipse(ball.position.x,ball.position.y,20,20);
  Engine.update(engine);
}

function Hforce(){

  Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function Vforce(){
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

