
class Rope{
   Constraint = Matter.Constraint
    constructor(body1,body2, offsetX, offsetY){    
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            stiffness:0.0,
            length:400,
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = this.Constraint.create(options)
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}