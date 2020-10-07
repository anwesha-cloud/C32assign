class Deer{
    constructor(x,y,w,h){
      var options={
        restitution:0.4,
        friction:0.3,
        density:0.4      
      }

      this.body=Bodies.rectangle(x,y,w,h,options)
      this.w=w
      this.h=h
      this.image=loadImage("sprites/deer.png")
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