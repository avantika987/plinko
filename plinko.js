class Plinko{
    constructor(x,y,radius){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 20;
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER);
        fill("white");
        ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius);
        }
}