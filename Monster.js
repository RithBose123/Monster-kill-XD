class monster{
    constructor(x,y){
this.x=x
this.y=y
var options={
    density:1,
    friction:6
}    
this.image=loadImage("images/Monster-01.png")
this.body=Bodies.rectangle(this.x,this.y,150,150,options)
World.add(world,this.body)
    }
    display(){
var pos=this.body.position;
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
fill("red")
image(this.image,0,0,200,200)
pop()
    }
}