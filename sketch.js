
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

var solo;

var celular; 
var boladeouro; 
var cubo;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var soloConfig = {
		isStatic: true
	}
    solo = Bodies.rectangle(300, 690, 1000, 20, soloConfig);
	World.add(world, solo);

    var celularConfig = {
		restitution: 0.5,
		frictionAir: 0.35,
        friction: 0.7
	}
    fill("blue");
	rectMode(CENTER);
	celular = Bodies.rectangle(60, 90, 40, 65, celularConfig);
	World.add (world, celular);
    
	var boladeouroConfig = {
		restitution: 0.02,
		frictionAir: 0.8,
		friction: 0.4
	}
	
	boladeouro = Bodies.circle(350,180, 50, boladeouroConfig);
	World.add (world, boladeouro);

	var cuboConfig = {
		restitution: 0.9,
		frictionAir: 0.05,
		friction: 0.1
	} 
	cubo = Bodies.rectangle(600, 285, 90, 90, cuboConfig);
	World.add(world, cubo);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);

  rect (solo.position.x, solo.position.y, 1000, 20);

  rect (celular.position.x, celular.position.y, 40, 65);

  ellipse (boladeouro.position.x, boladeouro.position.y, 50);

  rect (cubo.position.x, cubo.position.y, 90, 90);
  
  drawSprites();
 
}



