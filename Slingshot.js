class slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB=pointB
        this.sling=Constraint.create(options)
         World.add(world,this.sling)
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
    
        if(this.sling.bodyA){
            var pointA= this.sling.bodyA.position;
        var pointB=this.pointB
        stroke("black")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    fly(){
        this.sling.bodyA=null
    }
}