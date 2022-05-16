class Game{
  constructor(context) {
    this.ctx = context;
    this.spaceBar = new Player (450, 550, 200, 20);
    this.circle = new Circle (200, 200, 20, 5, 4);
    this.bricks = [];
    this.brick = new Brick ()
    this.gameOver = false;
    this.points = 1;
  }
  _drawSpaceBar() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.spaceBar.x, this.spaceBar.y, this.spaceBar.width, this.spaceBar.height);
  }

  _drawLife () {
    this.ctx.drawImage(score, 550, 950);
  }

  _drawCircle () {
    this.ctx.beginPath();
    this.ctx.arc(this.circle.x, this.circle.y, this.circle.size, 0, Math.PI * 2);
    this.ctx.fillStyle = 'blue';
    this.ctx.fill();
    this.ctx.strokeStyle = '#2e3548'; 
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
      if (this.spaceBar.life === 1) {
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
    if (this.bricks.length === 0){

      for (let i = 0; i< 4; i++){
        let newBrick = new Brick(startX, 20, 150, 50, this.status);
        this.bricks.push(newBrick);
        startX = startX + 250;
      }
    }
    
    this.bricks.forEach(brick => this.ctx.fillRect(brick.x, brick.y, brick.width, brick.height))
  }

  _checkCollision() {
    this.bricks.forEach(elem =>{
      if((this.circle.x >= elem.x && this.circle.x <= elem.x + elem.width) && (this.circle.y >= elem.y && this.circle.y <= elem.y + elem.height)){
        brickHit.play();
        let index = this.bricks.indexOf(elem);
        this.bricks.splice(index, 1);
        if(this.points > 3){
          this._win();
        } else {
          this.points += 1;
        }
      }
      console.log(this.points);
    } ) 
    
  }

  // _ballBrickCollision() {
  //   if (this.circle.x + this.circle.y > this.bricks.x && this.circle.x - this.circle.size < this.bricks.x + this.bricks.width)
  // }
  // const bricks = this.bricks;
  // let collision = false;
  // bricks.forEach(brick => {if (brick.x + brick.width  === this.circle.y - this.circle.size){
  //     collision = true;
  //    }});
     // if brick está colisionando, brick._hide() y quitarlo del array
    
  _gameOver(){
    this.gameOver = true;
    const losePage = document.getElementById('lose-page');
    losePage.style.display= 'block';
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

_drawLife(text, textX, textY, img, imgX, imgY){
  
  this.ctx.font = '25px arial';
  this.ctx.fillText(text, textX, textY);
  this.ctx.drawImage(img, imgX, imgY, 50, 50);
}

  _clean(){
    this.ctx.clearRect(0, 0, 1000, 600);
  }

  _gOver () {
    gameOver.style.display = 'block';
  
  }
  
  _update() {
    this._clean();
    this._drawLife(this.spaceBar.life, 975, 580, score, 920, 546);
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