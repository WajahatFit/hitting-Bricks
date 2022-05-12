class Game{
  constructor(context) {
    this.ctx = context;
    this.spaceBar = new Player (450, 550, 200, 20);
    this.circle = new Circle (200, 200, 20, 5, 4);
    this.bricks = [];
  }

  _backGround () {
    this.ctx.drawImage(bGroundImg, 0,0);
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
      
    if(this.circle.y - this.circle.size <= 0){
      this.circle.dy *=-1;
    } else if(this.circle.y + this.circle.size > 600) {
      if (this.spaceBar.life === 0) {
        const losePage = document.getElementById('lose-page');
        losePage = 'display:block'
        // y cargarnos el canvas
      } else {
        this.spaceBar.life-=1;
      }
    }
 }



 _spaceBarCollision () {
  if (this.circle.y + this.circle.size > 600 || (this.circle.y + this.circle.size > this.spaceBar.y && (this.circle.x > this.spaceBar.x && this.circle.x <this.spaceBar.x+this.spaceBar.width) ) || this.circle.y - this.circle.size < 0){
    this.circle.dy *= -1;
  }
 }

  _drawBricks () {
    this.ctx.fillStyle = 'brown';
    let startX = 50;
    for (let i = 0; i< 4; i++){
      let newBrick = new Brick(startX, 20, 150, 50);
      this.bricks.push(newBrick);
      startX = startX + 250;
    }
    this.bricks.forEach(brick => this.ctx.fillRect(brick.x, brick.y, brick.width, brick.height, brick.status))
  }

  // _checkCollisionBricks () {
  //   this.circle.forEach(brick => {
  //     if(this.circle.x)
  //   )
    
  // }

  _checkCollision() {
    this.bricks.forEach(elem =>{
      if((this.circle.x >= elem.x && this.circle.x <= elem.x + elem.width) && (this.circle.y >= elem.y && this.circle.y <= elem.y + elem.height)){
        let index = this.bricks.indexOf(elem);
        this.bricks.splice(index, 1);
      }
    } ) 
    
  }
  // const bricks = this.bricks;
  // let collision = false;
  // bricks.forEach(brick => {if (brick.x + brick.width  === this.circle.y - this.circle.size){
  //     collision = true;
  //    }});
     // if brick está colisionando, brick._hide() y quitarlo del array
    
  

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
//_drawscore
_drawScore(){
  let lives = document.getElementById('life');
  lives.innerText = this.spaceBar.life;
} 
  _update() {
    this._backGround();
    this._clean();
    this._spaceBarCollision ();
    this._checkCollision();
    this._bounceWalls();
    this._drawBricks();
    this._drawCircle();
    this._drawSpaceBar();
    this._drawScore();    //drawScore
    window.requestAnimationFrame(() =>{this._update()});
  }

  start() {
    this._assignControls();
    this._update();
  }
}