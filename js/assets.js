const ballImg = new Image();
ballImg.src = '../images/images.jpeg';

const bGroundImg = new Image();
bGroundImg.src = '../images/bg1.jpg';

const score = new Image();
score.src = '../images/life.png';

// sounds
const wallHit = new Audio();
wallHit.src = '../Sounds/wall.mp3';

const paddleHit = new Audio();
paddleHit.src = '../Sounds/paddle_hit.mp3';

const lifeLost = new Audio();
lifeLost.src = '../Sounds/life_lost.mp3';

const gameOver = document.getElementById('gameover');
const restart = document.getElementById('restart');

restart.addEventListener('click', function() {
  location.reload();
})

function gOver () {
  gameOver.style.display = 'block';

}