class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0.9,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        //this.width = 50;
        //this.height = 50;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //rectMode(CENTER);
        fill("purple");
        //rect(0, 0, this.width, this.height);
        circle(0, 0,this.radius);
        pop();
    }
}