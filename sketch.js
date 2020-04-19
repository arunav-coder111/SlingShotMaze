const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var box1;
var player, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //console.log(player);

    ground1 = new Ground(700,150,500,20);
    ground2 = new Ground(700,300,500,20);
    ground3 = new Ground(600,380,400,20,options);
    player = new Player(100,100);
    box1 = new Box (1000,120,50,50);
    slingShot = new SlingShot(player.body,{x:200,y:100});
}

function draw(){
    background("green");
    Engine.update(engine);
    strokeWeight(4);
   
    ground1.display();
    ground2.display();
    player.display();
    box1.display();
    slingShot.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
