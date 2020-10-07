class Tiger{
    constructor(x,y,w,h){
        var options={
        restitution:0.5,
        friction:0.3,
        density:0.5   
       }

       this.body=Bodies.rectangle(x,y,w,h,options)
       this.w=w
       this.h=h
       this.image=loadImage("sprites/tiger.png")
       World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}