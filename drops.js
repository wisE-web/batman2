class Drops {
constructor(x,y,radius){
  
    var options = {
        restitution: 1,
        friction: 0,
        static:false
    }
   
    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius;
    World.add(world, this.body);
}
display() {

    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill("lightBlue");
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);

    pop();
}
    update() {
        if(this.body.position.y>600){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
    };