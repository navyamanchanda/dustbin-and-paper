class paper{
    constructor(x,y,r){
        var options = {friction:0,restitution:0.4,density:1.2,isStatic:false
            
        }
        this.body= Bodies.circle(x,y,r,options)
        this.image=loadImage("paper.png")
        this.x=x
        this.y=y
        this.r=r
     World.add(world,this.body)

    }
    display(){
        var pos= this.body.position
        push ()
        translate (pos.x,pos.y)
        image(this.image,0,0,this.r,this.r)
        pop ()
    }
}