//Create variables here
var dog,happydog,database, foodStock;
 var foodS 
 var bedroom,washroom,garden
 var food1,food2
 var foodobj
 var fedTime
 var lastfed
var button1
var button2
var readGameState;
var gameState=0
function preload()
{
  //load images here
  dog=loadImage('Dog.png')
  happydog=loadImage('happydog.png')
  bedroom=loadImage("virtual pet images/Bed Room.png")
  washroom=loadImage("virtual pet images/Wash Room.png")
  garden=loadImage("virtual pet images/Garden.png")
}

function setup() {
  createCanvas(900, 900);
  database=firebase.database()
  dog1=createSprite(750,390,10,10)
  dog1.addImage(dog)
  dog1.scale=0.3

        foodobj=new Food()


     button1 = createButton('feed the dog');
    button1.position(600, 95);
  
  
     button2 = createButton('Add Food');
    button2.position(700, 95);
  



}

  function draw() {  
  background(46,139,87)
 
foodobj.getFoodStock()
foodobj.getlastfed()
foodobj.getgamestate()

//console.log(foodS)
button1.mousePressed(feedDog)
button2.mousePressed(addFoods)

 foodobj.display()
 //console.log("working")
  drawSprites();
 
 fill(225,225,254)
 textSize(15)
 currentTime=hour()
 if(currentTime==(lastfed)){
  foodobj.update("playing")
   foodobj.Garden()
 }else if(currentTime==(lastfed+2))
 {
foodobj.update("sleeping")
foodobj.bedroom()
 }else if(currentTime>(lastfed+2)&&currentTime<=(lastfed+4)){
foodobj.update('Bathing')
foodobj.washroom()
 }else{
  foodobj.update("Hungry")
   foodobj.display()
 }

 if(lastfed>=12)
{
  text("Last Feed : " +lastfed%12+" PM ",70,55)
} else if (lastfed==0){
  
text("Last Feed : 12 AM",70,55)
}else{
  text("Last Feed : " + lastfed +" AM ",70,55)
}
if(gameState!="Hungry"){
  button1.hide()
 button2.hide()
  
}else{
 button1.show()
  button2.show()
  
}



}

 
  

function feedDog(){
  dog1.addImage(happydog)
  food1=foodS-1
  foodobj.updateFoodStock(food1)
 fed=hour()
foodobj.updatelastfed(fed)
  }   
   

function addFoods(){
 food2=foodS+1
 foodobj.updateFoodStock(food2)
   
}



