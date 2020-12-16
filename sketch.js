
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
	bob1 = new Bob(400,300);
	bob2 = new Bob(450,300);
	bob3 = new Bob(350,300);
	bob4 = new Bob(300,300);
	bob5 = new Bob(500,300);

	pivot = new Pivot(400,100,400,20);
	rope1 = new Rope(bob1.body, pivot.body, 0, 0);``
	rope2 = new Rope(bob2.body, pivot.body, 0, 0);``
	rope3 = new Rope(bob3.body, pivot.body, 0, 0);``
	rope4 = new Rope(bob4.body, pivot.body, 0, 0);``
	rope5 = new Rope(bob5.body, pivot.body, 0, 0);``


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  pivot.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyDown === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body, bob5.body.position,{x:100,y:100});
	 }
   }


