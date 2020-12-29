const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1;
var basket2;
var basket3;
var paper;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 1200);


	engine = Engine.create();
	world = engine.world; 



	//Create the Bodies Here.
  basket1 = new Basket(  1090,500,20,100)
  basket2 = new Basket(910,500,20,100)
  basket3 = new Basket(  1000,550, 200,20 )
  paper  = new Paper(800,300,40,50 )
  ground = new Ground(600,600,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 paper.display();
 basket1.display();
 basket3.display();
 basket2.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85} )
   
	 
	   
	 }
   }
   
   



