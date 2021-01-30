
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof1,roof2,roof3,roof4,roof5;
var rope1, rope2, rope3, rope4, rope5,rope6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(190,600,80,80, 50);
	bob2 = new Bob(275,600,80,80, 50);
	bob3 = new Bob(360,600,80,80, 50);
	bob4 = new Bob(445,600,80,80, 50);
	bob5 = new Bob(530,600,80,80, 50);

	roof1 = new Roof(360,100,640,60);
	roof2 = new Roof(284,100,10,60);
	roof3 = new Roof(369,100,10,60);
	roof4 = new Roof(454,100,10,60);
	roof5 = new Roof(544,100,10,60);
	roof6 = new Roof(199,100,650,60);

	rope1 = new Rope(bob1.body,roof6.body);
	rope2 = new Rope(bob2.body,roof2.body);
	rope3 = new Rope(bob3.body,roof3.body);
	rope4 = new Rope(bob4.body,roof4.body);
	rope5 = new Rope(bob5.body,roof5.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 38){
	

	}
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85});
	}


}

