var canvas
var fundo,fundo2,fundo3;
var menina,meninaIMG;
var allPlayers,database,score,playerCount,form,player,game,gameState = 0;
var boy1,boy2,girl1,girl2,boy1IMG,boy2IMG,girl1IMG,girl2IMG;
var pizza1_img,pizza2_img,pizza3_img,pizza4_img,pizzas;

function preload() {
  pizza1_img = loadImage("images/pizza.png");
  pizza2_img = loadImage("images/pizza2.png");
  pizza3_img = loadImage("images/pizza3.png");
  pizza4_img = loadImage("images/pizza4.png");
  fundo = loadImage("images/pizzaria.png");
  meninaIMG = loadImage("images/moto-delivery.png");

}
function setup(){
    canvas = createCanvas(1200,800);
    menina = createSprite(600,700,20,20);
    menina.addImage(meninaIMG);
    menina.scale = 0.3
    database = firebase.database()
    game = new Game();
    game.getState();
    game.start();
    console.log(game); 
  }
function draw(){
  background(255)
  imageMode(CENTER);
  image(fundo,600,400,1000,height);
  if(playerCount===1){
    game.update(1);
  }
  if(gameState===1){
    clear()
    game.play()
  }
  drawSprites()
}