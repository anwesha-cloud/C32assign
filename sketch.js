const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world

function setup() {
  createCanvas(800,400);
  engine= Engine.create()
  world= engine.world

  ground= new Ground(400,380,800,20)
  platform1= new Platform(650,200,200,20)
  platform2 = new Platform(650,380,200,20)
  tiger=new Tiger(200,200,10,10)
  deer=new Deer(650,100,55,35)
  deer2=new Deer(650,300,50,55,35)
  chain=new Slingshot(tiger.body,{x:100,y:100})
}

function draw() {
  background("black");  
  Engine.update(engine)

  ground.display()
  platform1.display()
  platform2.display()
  tiger.display()
  deer.display()
  deer2.display()
  chain.display()  
}

function mouseDragged(){
  Matter.Body.setPosition(tiger.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.release()
}