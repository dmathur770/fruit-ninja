class Box {
constructor(x,y,width,height) {
    var options = {
        resitution:1
        
    }
 this.body = Bodies.rectangle(x,y,width,height,options)
 width = this.width;
 height = this.height;
 World.add(world,this.body)
}
 display() {
     var pos = this.body.position
     rectMode(CENTER)
     fill(255)
     rect(pos.x,pos.y,this.width,this.height)
 }

}