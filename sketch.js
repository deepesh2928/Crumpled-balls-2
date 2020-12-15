var ballBody,ground;
var box1,box2,box3;
var paperImg,binImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	paperImg = loadImage("paper.png");
	binImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,695,width,10);

	ballBody = new paper(100,200,40);

	box1 = new Box(620,680,150,20);
	box2 = new Box(535,615,20,150);
	box3 = new Box(705,615,20,150);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0);


	Engine.update(engine);
	
	ballBody.display();

	box1.display();
	
	box2.display();
	box3.display();

	ground.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROWKEY) {
	Matter.Body.applyForce( ballBody, ballBody.position, {x:10, y:-10});
	}
}
