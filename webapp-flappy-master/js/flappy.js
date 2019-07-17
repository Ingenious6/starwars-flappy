// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var labelScore;
var player;
var count;
var pipes = [];
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
  game.load.image("backgroundImg", "../assets/BG4.jpg");
  game.load.image("playerImg", "../assets/X-wing.png");
  game.load.image("playerImg2", "../assets/up.png");
  game.load.audio("score", "../assets/rocketfire1.wav");
  game.load.image("pipeBlock", "../assets/pipe_blue.png");


}

/*
 * Initialises the game. This function is only called once.
 */
function create()  {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.stage.setBackgroundColor("#030526");
  game.add.text(520, 10, "Star Wars : Take Evasive Action", {font: "20px Ariel", fill: "#ffffff"});

  var background = game.add.image(0, 0, "backgroundImg");
	background.width = 790;
	background.height = 400;


  player = game.add.sprite(50, 50, "playerImg",);
  game.physics.arcade.enable(player);
  player.body.velocity.x = 0;
  player.body.gravity.y = 250;

  var pipeInterval = 2.75 * Phaser.Timer.SECOND;
  game.time.events.loop(
      pipeInterval,
      generatePipe);





  labelScore = game.add.text(20, 20, "0");


  game.input.onDown.add(clickHandler);



  game.input
 .keyboard.addKey(Phaser.Keyboard.SPACEBAR)
 .onDown.add(playerJump);



game.input
    .keyboard.addKey(Phaser.Keyboard.UP)
    .onDown.add(playerJump);


    generatePipe();








}



    // set the background colour of the scene}

/*
 * This function updates the scene. It is called for every new frame.
 */
 function playerJump() {
  player.body.velocity.y = - 150;
  playSound()

 }


function addPipeBlock(x, y) {
 var pipeBlock = game.add.sprite(x,y,"pipeBlock");
 pipes.push(pipeBlock);
 game.physics.arcade.enable(pipeBlock);
 pipeBlock.body.velocity.x = -250;
}


function moveUp(){
  player.y = player.y - 150;
  playSound();
  changeScore()

}


function clickHandler(event) {
  playSound()
  changeScore()

}

function generatePipe(){
  var gapStart = game.rnd.integerInRange(1, 5);
  for(var count=0; count<8; count++){
    if(count !=gapStart && count !=gapStart+1) {
      addPipeBlock(800, count * 50);
    }

  }
  changeScore();



}

function update() {
 game.physics.arcade.overlap(
 player,
 pipes,
 gameOver);
}

function gameOver(){
 score = 0
 registerScore(score);
 game.state.restart();


}







function spaceHandler() {
  changeScore();
  playSound()

}

function changeScore() {
  score = score + 1;
  labelScore.setText(score.toString());
}

function playSound() {
  game.sound.play("score");

}
