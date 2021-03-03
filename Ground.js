class ground{
    constructor(x,y){
var options={
    isStatic:true
}
this.x=x
this.y=y
this.width=width
this.height=height
this.body=Bodies.rectangle(this.x,this.y,700,20,options)
World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    rectMode(CENTER)
    fill("white")
    rect(pos.x,pos.y,700,20)
    }
}