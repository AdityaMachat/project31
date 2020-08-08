class Plinko{
    constructor(x,y,radius){
        var options ={
            isStatic:true,
             restitution:0.5,
             density:1.2,
             friction:0.5
        }
        this.body= Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
        }
        
        display(){
         var posx=this.body.position.x
         var posy=this.body.position.y
         ellipseMode(CENTER);
         ellipse(posx,posy,this.radius,this.radius);

        }
}