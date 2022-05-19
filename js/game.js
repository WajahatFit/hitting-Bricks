

class Game{
  constructor(context, canvas) {
    this.ctx = context;
    this.canvas = canvas;
    this.spaceBar = new Player (450, 555, 200, 40);
    this.circle = new Circle (200, 200, 20, 10, 10);
    this.bricks = [];
    this.bricks2 =  [];
    this.brick = new Brick ();
    this.gameOver = false;
    this.points = 1;
    this.ctx.lineWidth = 5;
  }
  _drawSpaceBar() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.spaceBar.x, this.spaceBar.y, this.spaceBar.width, this.spaceBar.height);
    this.ctx.strokeStyle = 'purple';
    this.ctx.strokeRect(this.spaceBar.x, this.spaceBar.y, this.spaceBar.width, this.spaceBar.height);
    
  }

  _drawLife () {
    this.ctx.drawImage(score, 550, 950);
  }

  _drawCircle () {
    this.ctx.beginPath();
    this.ctx.arc(this.circle.x, this.circle.y, this.circle.size, 0, Math.PI * 2);
    this.ctx.fillStyle = 'grey';
    this.ctx.fill();
    this.ctx.strokeStyle = 'yellow'; 
    this.ctx.stroke();
    this.ctx.closePath();
  }

 _bounceWalls(){
     this.circle.x += this.circle.dx;
     this.circle.y += this.circle.dy;
     if (this.circle.x + this.circle.size > 1000/* canvas width */ || this.circle.x - this.circle.size < 0){
       this.circle.dx *= -1;
       wallHit.play();
      }
      
    if(this.circle.y - this.circle.size <= 0){
      this.circle.dy *=-1;
    } else if(this.circle.y + this.circle.size > 600) {
      if (this.spaceBar.life < 1) {
        this._gameOver();
      } else {
        this.spaceBar.life -= 1;
        lifeLost.play();
      }
    }
 }




 _spaceBarCollision () {
  if (this.circle.y + this.circle.size > 600 || (this.circle.y + this.circle.size > this.spaceBar.y && (this.circle.x > this.spaceBar.x && this.circle.x <this.spaceBar.x+this.spaceBar.width) ) || this.circle.y - this.circle.size < 0){
    this.circle.dy *= -1;
    paddleHit.play();
  }
 }

  _drawBricks () {
    this.ctx.fillStyle = 'brown';
    let startX = 50;
    let startX2 = 50;
    let startY = 90;
    let startY2 = 150; 
    if (this.bricks.length === 0){

      for (let c = 0; c < 4; c++){
        let newBrick = new Brick(startX, startY, 150, 50, this.status);
        this.bricks.push(newBrick);
        startX = startX + 250;
      }
   }
    if (this.bricks2.length === 0){

      for (let c = 0; c< 4; c++){
        let newBrick = new Brick(startX2, startY2, 150, 50, this.status);
        this.bricks2.push(newBrick);
        startX2 = startX2 + 250;
      }
    }
    
    this.bricks.forEach(brick => this.ctx.fillRect(brick.x, brick.y, brick.width, brick.height))
    this.bricks2.forEach(brick => this.ctx.fillRect(brick.x, brick.y, brick.width, brick.height)
    )
  }

  _checkCollision()  {
    this.bricks.forEach(elem =>{
      if((this.circle.x > elem.x && this.circle.x <= elem.x + elem.width) && (this.circle.y > elem.y && this.circle.y < elem.y + elem.height)){
        brickHit.play();
        let index = this.bricks.indexOf(elem);
        this.bricks.splice(index, 1);
        if(this.points > 5 && this.points< 100) {
          this.speed += 2;
        }
          else if (this.points > 100) {
            this._win();
          }else {
          this.points += 1;
          }
      }
  
    } )
    
    this.bricks2.forEach(elem =>{
      if((this.circle.x > elem.x && this.circle.x <= elem.x + elem.width) && (this.circle.y > elem.y && this.circle.y < elem.y + elem.height)){
        brickHit.play();
        let index = this.bricks2.indexOf(elem);
        this.bricks2.splice(index, 1);
        if(this.points > 100){
          this._win();
        } else {
          this.points += 1;
        }
      }
  } )
    
  }
    
  _gameOver(){
    this.gameOver = true;
    const losePage = document.getElementById('lose-page');
    losePage.style.display= 'block';
    this.canvas.remove();
  }
  _win(){
    const winPage = document.getElementById('win-page');
    winPage.style.display= 'block';
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

_drawLife() { 
  
  this.ctx.font = '50px Germania One';
 
  this.ctx.drawImage(score, 850, 5, 100, 100);
  this.ctx.drawImage(pointImg, 40, 30, 50, 50);
  this.ctx.fillText(this.spaceBar.life, 940, 70); 
  this.ctx.fillText(this.points,100, 70);
}

  _clean(){
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _gOver () {
    gameOver.style.display = 'block';
  
  }
  
  _update() {
    this._clean();
    this._drawLife();
    this._spaceBarCollision ();
    this._checkCollision();
    this._bounceWalls();
    this._drawBricks();
    this._drawCircle();
    this._drawSpaceBar();
    
    if(!this.gameOver){    
    window.requestAnimationFrame(() =>{this._update()});
    }
  }

  start() {
    this._assignControls();
    this._update();
  }
}