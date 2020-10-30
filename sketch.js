var ball;
var ground;
var rightwall,leftwall,bottomwall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20);

	ball = new Paper(100,500,2);
	

	rightwall = new DustBin(600,500,20,100);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  ground.display();
  ball.display();
  rightwall.display();
  drawSprites();
 
}



