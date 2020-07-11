class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    
      this.Visiblity = 255 ;
    }
  
    display(){
  
      if(this.body.speed < 3) {
  
        super.display();
      }
      else{
        push();
        World.remove(world,this.body) ;
        this.Visiblity = this.Visiblity-5 ;
        tint(255,this.Visiblity) ;
       // image(this.image,this.body.position.x , this.body.position.y ,50 , 50);
  
        pop();
      }
  
    }
  
  };
    