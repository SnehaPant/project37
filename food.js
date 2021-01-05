class Food{
    constructor(){
       
        this.image=loadImage("Milk.png")
    }

        getFoodStock(){
           // console.log("woring")
            var foodCount1 = database.ref('food');
            foodCount1.on("value",function(data){
              foodS= data.val();
           
           })
        }
        
    updateFoodStock(count){
        database.ref('/').update({
            'food': count
          });
    }
   
    display(){
        var x=80,y=100
        imageMode(CENTER)
       
        if (foodS!=0){
            for(var i=0;i<foodS;i++){
                if(i%10==0){
                  x=80
                  y=y+50
                }
                image(this.image,x,y,50,50)
                x=x+30
            }
        }
    }  
    bedRoom(){
        image(bedroom,550/2,850/2)
    }
washRoom(){
  image(washroom,550/2,850/2)
}
Garden(){
    image(garden,550/2,850/2)
}
getlastfed(){
    // console.log("woring")
     var fedTime = database.ref('lastfed');
     fedTime.on("value",function(data){
      lastfed= data.val();
    
    })
 }
 updatelastfed(s){
    database.ref('/').update({
        lastfed:s
      });
}
getgamestate(){
    var state=database.ref('gameState')
state.on("value",function(data){
    gameState=data.val()
})
}
 update(state){
    database.ref("/").update({
      gameState:state
    })
 }
}