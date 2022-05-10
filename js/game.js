class Game {
  constructor(context) {
    this.ctx = context;
    this.spaceBar = new Player (450, 550, 200, 20);
    this.circle = new Circle (200, 200, 20, 5, 4);
    this.bricks = [];
    this.generateInterval = undefined;
  }
    /*this.brick1 = new Brick (80, 10, 60 , 10);
    this.brick2 = new Brick (150, 10, 60 , 10);
    this.brick3 = new Brick (220, 10, 60 , 10);
    this.brick4 = new Brick (290, 10, 60 , 10);
    this.brick5 = new Brick (360, 10, 60 , 10);
    this.brick6 = new Brick (430, 10, 60 , 10);
    this.brick7 = new Brick (500, 10, 60 , 10);
    this.brick8 = new Brick (570, 10, 60 , 10);
    this.brick9 = new Brick (640, 10, 60 , 10);
    this.brick10 = new Brick (710, 10, 60 , 10);
    this.brick11 = new Brick (780, 10, 60 , 10);
    this.brick12 = new Brick (850, 10, 60 , 10);
    this.brick13 = new Brick (920, 10, 60 , 10);
    this.brick14 = new Brick (920, 10, 60 , 10);
    this.brick15 = new Brick (10, 30, 60 , 10);
    this.brick16 = new Brick (80, 30, 60 , 10);
    this.brick17 = new Brick (150, 30, 60 , 10);
    this.brick18 = new Brick (220, 30, 60 , 10);
    this.brick19 = new Brick (290, 30, 60 , 10);
    this.brick20 = new Brick (360, 30, 60 , 10);
    this.brick21 = new Brick (430, 30, 60 , 10);
    this.brick22 = new Brick (500, 30, 60 , 10);
    this.brick23 = new Brick (570, 30, 60 , 10);
    this.brick24 = new Brick (640, 30, 60 , 10);
    this.brick25 = new Brick (710, 30, 60 , 10);
    this.brick26 = new Brick (780, 30, 60 , 10);
    this.brick27 = new Brick (850, 30, 60 , 10);
    this.brick28 = new Brick (920, 30, 60 , 10);*/
    _drawBricks () {
      
      this.bricks.forEach((elem) => {
        this.ctx.fillRect(elem.brick.x, elem.brick.y, elem.brick.width, elem.brick.height);
      })
      
       for (let i=1; i<4;i++){
        console.log('bricks')};
      }
    

  _generateBricks () {
    const brick = new Brick (20, 10, 60 , 10);
    this.bricks.push(brick);
    console.log(this.bricks);
  }
  _drawSpaceBar() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.spaceBar.x, this.spaceBar.y, this.spaceBar.width, this.spaceBar.height);
  }

  _drawCircle () {
    this.ctx.beginPath();
    this.ctx.arc(this.circle.x, this.circle.y, this.circle.size, 0, Math.PI * 2);
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();

  }
 _bounceWalls(){
     this.circle.x += this.circle.dx;
     this.circle.y += this.circle.dy;
     if (this.circle.x + this.circle.size > 1000/* canvas width */ || this.circle.x - this.circle.size < 0){
       this.circle.dx *= -1;
     }
     if (this.circle.y + this.circle.size > 600 /* canvas height */ || this.circle.y - this.circle.size < 0){
         this.circle.dy *= -1;
       }
 }

    /*this.ctx.fillRect(this.brick1.x, this.brick1.y, this.brick1.width, this.brick1.height);
    this.ctx.fillRect(this.brick2.x, this.brick2.y, this.brick2.width, this.brick2.height);
    this.ctx.fillRect(this.brick3.x, this.brick3.y, this.brick3.width, this.brick3.height);
    this.ctx.fillRect(this.brick4.x, this.brick4.y, this.brick4.width, this.brick4.height);
    this.ctx.fillRect(this.brick5.x, this.brick5.y, this.brick5.width, this.brick5.height);
    this.ctx.fillRect(this.brick6.x, this.brick6.y, this.brick6.width, this.brick6.height);
    this.ctx.fillRect(this.brick7.x, this.brick7.y, this.brick7.width, this.brick7.height);
    this.ctx.fillRect(this.brick8.x, this.brick8.y, this.brick8.width, this.brick8.height);
    this.ctx.fillRect(this.brick9.x, this.brick9.y, this.brick9.width, this.brick9.height);
    this.ctx.fillRect(this.brick10.x, this.brick10.y, this.brick10.width, this.brick10.height);
    this.ctx.fillRect(this.brick11.x, this.brick11.y, this.brick11.width, this.brick11.height);
    this.ctx.fillRect(this.brick12.x, this.brick12.y, this.brick12.width, this.brick12.height);
    this.ctx.fillRect(this.brick13.x, this.brick13.y, this.brick13.width, this.brick13.height);
    this.ctx.fillRect(this.brick14.x, this.brick14.y, this.brick14.width, this.brick14.height);
    this.ctx.fillRect(this.brick15.x, this.brick15.y, this.brick15.width, this.brick15.height);
    this.ctx.fillRect(this.brick16.x, this.brick16.y, this.brick16.width, this.brick16.height);
    this.ctx.fillRect(this.brick17.x, this.brick17.y, this.brick17.width, this.brick17.height);
    this.ctx.fillRect(this.brick18.x, this.brick18.y, this.brick18.width, this.brick18.height);
    this.ctx.fillRect(this.brick19.x, this.brick19.y, this.brick19.width, this.brick19.height);
    this.ctx.fillRect(this.brick20.x, this.brick20.y, this.brick20.width, this.brick20.height);
    this.ctx.fillRect(this.brick21.x, this.brick21.y, this.brick21.width, this.brick21.height);
    this.ctx.fillRect(this.brick22.x, this.brick22.y, this.brick22.width, this.brick22.height);
    this.ctx.fillRect(this.brick23.x, this.brick23.y, this.brick23.width, this.brick23.height);
    this.ctx.fillRect(this.brick24.x, this.brick24.y, this.brick24.width, this.brick24.height);
    this.ctx.fillRect(this.brick25.x, this.brick25.y, this.brick25.width, this.brick25.height);
    this.ctx.fillRect(this.brick26.x, this.brick20.y, this.brick20.width, this.brick20.height);
    this.ctx.fillRect(this.brick27.x, this.brick27.y, this.brick27.width, this.brick27.height);
    this.ctx.fillRect(this.brick28.x, this.brick28.y, this.brick28.width, this.brick28.height);*/
  


  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.spaceBar.moveLeft();
          break;
        case 'ArrowRight':
          this.spaceBar.moveRight();
          break;
        default:
          break;
      }
    });
  }

  _clean(){
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  // _checkCollision() {
  // 1.  comprobar que la pelota y los bricks están en contacto
  // const bricks = this.bricks;
  // let collision = false;
  // this._checkCollisionBricks
  // this._checkCollisionBar (final)
  // bricks.forEach(brick=> if posicion === ball.posicion {
  //  collision = true;
  // })
  // if (collision)
  // console.log( "choque")
  // else console.log("libre")
  // }

  _update() {
    this._clean();
    this._bounceWalls();
    this._drawBricks();
    this._drawCircle();
    this._drawSpaceBar();
    // crear método this._checkCollisions()
    window.requestAnimationFrame(() =>{this._update()});
  }

  start() {
    this._assignControls();
    this.generateInterval = setInterval(() => {
      console.log('New brick')
      this._generateBricks();
    }, 10000);
    this._generateBricks();
    this._update();
  }
}