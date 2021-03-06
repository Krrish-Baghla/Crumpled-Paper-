class Paper
{
    constructor(x,y,width,height)
    {
     var options = {
         isStatic : false,
         restitution : 0.3,
         friction:0,
         density:1.2

     }
     this.image=loadImage("paper.png")
     this.body = Bodies.circle(this.x,this.y,this.width,this.height,options);
     World.add(world,this.body);
    }
    display()
    {
        var paperPos=this.body.position;	
        push()
        translate(paperPos.x,paperPos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);	
        pop()
    }
}