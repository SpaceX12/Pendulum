const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bar,ball,ground;

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }

  var bar_options={
    isStatic: true
  }

  ground = Bodies.rectangle(500,330,600,20,ground_options)
  World.add(world,ground);

  bar = Bodies.rectangle(500,100,400,20,bar_options);
  World.add(world,bar);

  var ball_options = {
    restitution : 1.0,
    density : 0.7
  }

  ball  = Bodies.circle(520,200,40,ball_options);
  World.add(world,ball);


  var options = {
    bodyA : ball,
    bodyB : bar,
    stiffness: 0.004,
    length : 130
  }

  var rope = Constraint.create(options);
  World.add(world,rope);

  fill("White");
}

function draw() {
  background(0); 

  Engine.update(engine);

  text("Press space bar to oscillate the pendulam to left and right with mouse", 40, 35);
  text("Press any key to release", 450, 35);
  text("Press Enter to stop the Pendulum from oscillating", 600, 35);

  fill ("brown");
  rectMode(CENTER);
  rect(bar.position.x, bar.position.y, 200, 20);

  fill(0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400, 20);


  fill("res");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40);

  strokeWeight(8);
  stroke("blue");
  line(ball.position.x, ball.position.y, bar.position.x, bar.position.y)

  if(keyCode === 32){
  ball.position.y = mouseY;
  ball.position.x = mouseX;
  }

  else if (keyCode === ENTER){
  ball.position.x = 200;

  }

}