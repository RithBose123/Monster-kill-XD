class Box{
    constructor(x,y){
        var options={
            density:7,
            friction:18
    }
    this.x=x 
    this.y=y
    this.body=Bodies.rectangle(this.x,this.y,50,50,options)
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,50,50)
        pop()
    }
}