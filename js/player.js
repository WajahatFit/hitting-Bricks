class Player {
    constructor (x, y, width, height){
        this.x = x;
        this.y = y;
        this.width =width;
        this.height = height;
        this.life = 3;
    }

    moveRight (){
        this.x += 100;
        if(this.x + this.width > 1000){
            this.x = 800;
        } 
    }
    moveLeft () {
        this.x -= 100;
        if(this.x < 0){
            this.x = 0;
        } 
    }

}

// this is spaceBar in Game!


