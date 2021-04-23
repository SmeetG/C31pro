const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var score = 0;
function preload(){
   this.image = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(380,300,270,10);
    platform1 = new Ground(720,200,200,10);

    //level one
    box1 = new Box(280,275,30,40);
    box2 = new Box(310,275,30,40);
    box3 = new Box(340,275,30,40);
    box4 = new Box(370,275,30,40);
    box5 = new Box(400,275,30,40);
    box6 = new Box(430,275,30,40);
    box7 = new Box(460,275,30,40);
    box8 = new Box(490,235,30,40);
    //level two
    box9 = new Box(310,235,30,40);
    box10 = new Box(340,235,30,40);
    box11 = new Box(370,235,30,40);
    box12 = new Box(400,235,30,40);
    box13 = new Box(430,235,30,40);
    box14 = new Box(460,235,30,40);
    //level three
    box15 = new Box(340,195,30,40);
    box16 = new Box(370,195,30,40);  
    box17 = new Box(400,195,30,40);
    box18 = new Box(430,195,30,40);
    //level four
    box19 = new Box(370,155,30,40);
    box20 = new Box(400,155,30,40);
    //level five
    box21 = new Box(385,115,30,40);

    //set two 
    //level one
    box22 = new Box(640,175,30,40);
    box23 = new Box(670,175,30,40);
    box24 = new Box(700,175,30,40);
    box25 = new Box(730,175,30,40);
    box26 = new Box(760,175,30,40);
    //level two
    box27 = new Box(670,135,30,40);
    box28 = new Box(700,135,30,40);
    box29 = new Box(730,135,30,40);
    //level three
    box30 = new Box(700,95,30,40);

    //polygon with sling
    polygon =   Bodies.circle(50,200,20);
    World.add(world,polygon);
    
    slingShot = new SlingShot(this.polygon,{x:200 , y:200});

}
   
   function draw(){
    background("white");
    Engine.update(engine);
    text("score:"+score,750,40);

    //ground.display();
    strokeWeight(2);
    stroke(15);
    fill("red");
    platform.display();
    platform1.display();
    ground.display();
    
    stroke(15);
    fill("grey");
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    stroke(15);
    fill("orange");
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    stroke(15);
    fill("violet");
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    box17.display();
    box17.score();
    box18.display();
    box18.score();
    stroke(15);
    fill("green");
    box19.display();
    box19.score();
    box20.display();
    box20.score();
    stroke(15);
    fill("blue");
    box21.display();
    box21.score();

    stroke(15);
    fill("red")
    box22.display();
    box22.score();
    box23.display();
    box23.score();
    box24.display();
    box24.score();
    box25.display();
    box25.score();
    box26.display();
    box16.score();
    stroke(15);
    fill("yellow");
    box27.display();
    box27.score();
    box28.display();
    box28.score();
    box29.display();
    box29.score();

    stroke(15);
    fill("pink");
    box30.display();
    box30.score();

    text("drag the line and release to hit the crazy boxes",600,350);
    ellipse(polygon.position.x,polygon.position.y,20);
    
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX , y: mouseY});
} 

function mouseReleased(){
    slingShot.fly();
}
 function keyPressed(){
     if(keyCode === 32){
         slingShot.attach(this.polygon);
     }
 }

