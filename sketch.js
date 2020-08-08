const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var particle=[];
var plinkos=[];
var divisions=[];
var divisionheight=300;
function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  platform = new Ground(240,790,480,5);
  for(var k=0;k<=width;k=k+80){
   divisions.push(new Division(k,height-divisionheight/2,10,divisionheight));
  }
  for(var j =40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75,10));
  }
   for(var j =15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,175,10));
  }
  for(var j =40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275,10));
  }
  for(var j =15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,375,10));
  }
  
}



function draw() {
  background(0);
  Engine.update(engine); 
  if(frameCount%60===0){
     particle.push(new  Particle(random(10,400),20,10));
  }
   platform.display();
   for(var i =0;i<divisions.length;i=i+1) {
    divisions[i].display();

   }
   for(var j =0;j<plinkos.length;j=j+1) {
       plinkos[j].display();

   }
   for(var j =0;j<particle.length;j=j+1) {
    particle[j].display();

}
  
    
  drawSprites();
}