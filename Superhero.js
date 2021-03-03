class superhero{
    constructor(x,y,r){
        var options ={
            density:1
            
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("images/Superhero-01.png")
        this.image.scale=3
        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
        World.add(world,this.body)
    }
    display(){
        var superPos=this.body.position
      
        push()
        translate(superPos.x,superPos.y)
      //  rotate(angle)
        imageMode(CENTER)
        fill("black")
        stroke("red")
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}
