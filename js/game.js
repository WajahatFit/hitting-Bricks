class Game{
  constructor(context) {
    this.ctx = context;
    this.spaceBar = new Player (500, 400, 40, 40)
    this.circle = new Player ()
  }
  _drawSpaceBar() {
    this.ctx.strokeStyle = 'green';
    this.ctx.strokeRect(this.)
  }

  _drawCircle () {
    this.ctx.drawImage(ballImg, this.spaceBar.x, this.spaceBar.y, this.spaceBar.width, this.spaceBar.height);
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


  _update() {
    this._drawCircle();
    this._drawSpaceBar();
    window.requestAnimationFrame(() =>{this._update()});
  }

  start() {
    this._assignControls();
    this._update();
  }
}