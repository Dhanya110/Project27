class Bob
{
constructor (x,y)
{
    var options={
        'restitution':1,
        'friction':0,
        'density':1,
        'isStatic': false
    }
   
    this.body=Bodies.circle(x,y,50,options)
    World.add(world,this.body);
}
display()
{ 
    
    var boby=this.body.position;
    push()
    fill("blue")
    ellipseMode(RADIUS);
    ellipse(boby.x,boby.y,50,50);
    pop()
  }

}