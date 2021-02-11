const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops=100;
var drops=[]

var batman

function preload(){
    batmanimg = loadImage("images/Walking frame/walking_1.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

   createCanvas(400,600);
   batman = createSprite(200,500,50,200);
   batman.addImage(batmanimg);
    batman.scale = 0.3;
    for (var i=0; i<maxDrops; i++) {
       drops.push( new Drops(random(0,400),random(0,600),2))
    
    }
    
}

function draw(){
Engine.update(engine);
    background(0,0,0);
    for (var i=0; i<maxDrops; i++) { 
        drops[i].display();
      drops[i].update();
    
    }
 

   
    drawSprites();
    
}   

