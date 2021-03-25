const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[]
var plinokos=[]
var divisions=[]
var divisionHeight=300;
function setup() {
  createCanvas(800,800);
 engine=Engine.create()
 world=engine.world
  ground = new Ground (400,790,800,10)
  for(var i=0;i<=width ;i=i+80 ){
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
  }
  for(var j=75;j<=width;j=j+50){
    plinokos.push(new Plinko(j,75))
  }

  for(var j=50;j<=width-10;j=j+50){
    plinokos.push(new Plinko(j,175))
  }

  for(var j=75;j<=width;j=j+50){
    plinokos.push(new Plinko(j,275))
  }

  for(var j=50;j<=width-10;j=j+50){
    plinokos.push(new Plinko(j,375))
  }
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  ground.display()
  for(var i=0; i <divisions.length;i++){
    divisions[i].display()
  }  
  for(var j=0;j<plinokos.length;j++){
    plinokos[j].display()
  }

  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10))
  }
  for(var k=0;k<particles.length;k++){
    particles[k].display()
  }
  drawSprites();
}