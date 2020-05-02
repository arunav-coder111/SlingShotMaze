const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6;
var player, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //console.log(player);

    ground1 = new Ground(700,150,500,20);
    ground2 = new Ground(700,300,500,20);
    ground3 = new Ground(600,380,1200,20);
    player = new Player(30,60,30,30);
    box1 = new Box (700,120,30,30);
    box2 = new Box (720,120,30,30);
    box3 = new Box (710,110,30,30);
    box4 = new Box (700,270,30,30);
    box5 = new Box (720,270,30,30);
    box6 = new Box (710,260,30,30);
    slingShot = new SlingShot(player.body,{x:200,y:100});
}

function draw(){
    background("green");
    Engine.update(engine);
    strokeWeight(4);
   
    ground1.display();
    ground2.display();
    ground3.display();
    player.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    slingShot.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(player.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
