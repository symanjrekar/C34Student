const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;


function preload(){
  bg= loadImage("images/bg.jpg");
  
}
function setup() 
{
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

}

function draw() 
{
  background(bg);  
  Engine.update(myEngine);

  ground.show();

  

}