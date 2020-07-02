
class Rope{
    Constraint = Matter.Constraint
     constructor(body1,body2, offsetX, offsetY){    
         this.offsetX=offsetX;
         this.offsetY=offsetY;
         var options = {
             length:300,
             bodyA:body1,
             bodyB:body2,
             pointB:{x:this.offsetX,y:this.offsetY}
         }
         this.rope = this.Constraint.create(options)
         World.add(world,this.rope);
     }
     display(){
         var PointA = this.rope.bodyA.position;
         var pointB = this.rope.bodyB.position;

         strokeWeight(2);

         var Anchor1X=PointA.x
         var Anchor1Y=PointA.y

         var Anchor2X=PointA.x
         var Anchor2Y=pointB.y+this.offsetY


         line(Anchor1X, Anchor1Y,Anchor2X,Anchor2Y);
     }
 }