const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var SuperHero1
var gameState="onSling";
function preload() {
//preload the images here
BgImage=loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
    world = engine.world;
SuperHero1=new superhero(200,200,150)
  slingshot1=new slingshot(SuperHero1.body,{x:200,y:200})
  ground1=new ground(500,400)
  monster1=new monster(750,300)
  box1= new Box(500,100)
  box2=new Box(500,150)
  box3=new Box(500,200)
  box4=new Box(500,250)
  box5=new Box(500,300)
  box6=new Box(600,200)
  box7=new Box(600,350)
  box8=new Box(600,150)
  box9=new Box(600,300)
  box10=new Box(600,250)
 
  
  // create sprites here

}

function draw() {
  background(BgImage);
  SuperHero1.display();
ground1.display();
monster1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

//box11.display();
Engine.update(engine)
}

function mouseDragged(){
 
  Matter.Body.setPosition(SuperHero1.body,{x:mouseX,y:mouseY})
 
}
function mouseReleased(){
 
  slingshot1.fly();
 
}

function keyPressed(){
  if(keyCode===32){
    slingshot1.attach(SuperHero1.body)
    Matter.Body.setPosition(SuperHero1.body,{x:200,y:200})
  }
}