//Create variables here
var dogimg, happydog;
var database;
var foodS, foodstock;

	//load images here
  function preload()
{
  //load images here
  dogimg = loadImage("images/dog.png");
  happyDog = loadImage("images/HAPPYDOG.png")
}


function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250, 50, 50);
  dog.addImage(dogimg);
  dog.scale = 0.2;
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}

function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  textSize(13);
  fill(255, 255, 255);
  stroke("black");
  text("FOOD Remaining :" + foodS , 170, 100);
  textSize(15);
  text("NOTE : PRESS UP ARROW KEY TO FEED THE DOG", 80, 50);
  //add styles here
  
}

function readStock(data){
    foodS = data.val()
}

function writeStock(x){
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
    }
    console.log(x)
   database.ref('/').update({
     food:x
   }); 
}