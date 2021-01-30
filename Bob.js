class Bob{
    constructor(x,y,w,h,angle){
        var options={
            isStatic:true,
            resitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(5);
        stroke("red");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}