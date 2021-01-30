class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetX
        var options ={
            bodyA: body1, 
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.04,
            length:100
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

 
    display (){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    
    stroke("white");
    strokeWeight(5);
    
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    
    }
    }