class Food{
constructor(){
    this.image = loadImage("images/Milk.png")
    this.lastfed
    this.foodstock
}
getFoodStock(){

}

updateFoodStoke(){

}

deductFood(){
    
}
display(){
    push();
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    pop();
}
}