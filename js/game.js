class Game{
  constructor(context) {
    this.ctx = context;
    this.spaceBar = new Player (450, 550, 200, 20);
    this.circle = new Circle (200, 200, 20, 5, 4);
    this.bricks = [];
    this.brick = new Brick (50, 20, 150 , 50);
    this.brick1 = new Brick (300, 20, 150 , 50);
    this.brick2 = new Brick (550, 20, 150 , 50);
    this.brick3 = new Brick (850, 20, 150 , 50);
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

  _drawBricks () {
    this.ctx.fillStyle = 'brown';
    this.ctx.fillRect(this.brick.x, this.brick.y, this.brick.width, this.brick.height);
    this.ctx.fillRect(this.brick1.x, this.brick1.y, this.brick1.width, this.brick1.height);
    this.ctx.fillRect(this.brick2.x, this.brick2.y, this.brick2.width, this.brick2.height);
    this.ctx.fillRect(this.brick3.x, this.brick3.y, this.brick3.width, this.brick3.height);
    
  }

  _checkCollision() {
    // 1.  comprobar que la pelota y los bricks están en contacto
  const bricks = this.bricks;
  let collision = false;
  this._checkCollisionBricks
    //     // this._checkCollisionBar (final)
  this.bricks.forEach(brick => {if (brick.x + brick.width  === this.circle.x + this.circle.size){
      collision = true;
     }});
     if (collision) {
      console.log( "choque");
     }else console.log("libre");
  
    
    
  }

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

  _update() {
    this._clean();
    this._checkCollision()
    this._bounceWalls();
    this._drawBricks();
    this._drawCircle();
    this._drawSpaceBar();
    window.requestAnimationFrame(() =>{this._update()});
  }

  start() {
    this._assignControls();
    this._update();
  }
}