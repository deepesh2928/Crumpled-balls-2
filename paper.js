class paper {
    constructor(x,y,radius){
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.1
        }
        this.body = Matter.Bodies.circle(x,y,20,options);
        this.radius=radius;
        World.add(world, this.body);
        this.image = loadImage("paper.png");
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
};