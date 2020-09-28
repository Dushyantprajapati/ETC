class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.05,
          'friction':0.01,
          'density':0.01
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      if(this.body.speed<3){

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
      else{
       World.remove(world,this.body);
       push()
       this.Visibility=this.Visibility-5;
       tint(255,this.Visibility);
       pop()
      }
    }
} 