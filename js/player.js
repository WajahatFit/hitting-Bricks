class Player {
    constructor (x, y, width, height){
        this.x = x;
        this.y = y;
        this.width =width;
        this. height = height;
    }

    moveRight (){
        this.x += 25;
        if(this.x > 1000){
            this.x = 0;
        } 
    }
    moveLeft () {
        this.x -= 25;
        if(this.x < 0){
            this.x = 1000;
        } 
    }

}

class Circle {
    constructor (x, y, size, dx, dy){
        this.x = x;
        this.y = y;
        this.size = size;
        this.dx = dx;
        this.dy = dy; 
    }

    
}
