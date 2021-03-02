class Particle{
    constructor(x,y,radius){
        var options = {
            restitution : 0.7
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = 20;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
      //  this.body.position.y=mouseY;
        this.body.position.X=mouseX;

        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0, this.radius);
        pop();
    }
}