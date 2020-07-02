var bobDiameter = 50*2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup() {
	createCanvas(1200, 700);
	canvas.shapeColor = color(0)

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	bob1 = new Bob(200,400,50);
	 bob2 = new Bob(300,400,50);
	 bob3 = new Bob(400,400,50);
	 bob4 = new Bob(500,400,50);
	 bob5 = new Bob(600,400,50);
	hanger = new Ground(width/2,height-500,width,50);
	rope1 = new Rope(bob1.body,hanger.body,bobDiameter,0);
	 rope2 = new Rope(bob2.body,hanger.body,bobDiameter,0);
	 rope3 = new Rope(bob3.body,hanger.body,bobDiameter,0);
	 rope4 = new Rope(bob4.body,hanger.body,bobDiameter,0);
	 rope5 = new Rope(bob5.body,hanger.body,bobDiameter,0);
  
}

function draw() {
  rectMode(CENTER);
  background(211,208,30);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  hanger.display();
  rope1.display();
 rope2.display();
  rope3.display();
  rope4.display();
   rope5.display();

  drawSprites(); 
  }

  function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position={x:0,y:0});
	}
	drawSprites();
  }