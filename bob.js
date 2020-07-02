class Bob{
    constructor(x,y,radius){
        var options={
            //isStatic=true,
            restitution:1.0,

        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(0, 0,this.radius,this.radius);
        pop();
    }
}