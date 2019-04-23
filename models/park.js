const Park = function(name, price){
  this.name = name;
  this.price = price;
  this.collection = [];
}

Park.prototype.addDinosaur = function(dino){
  this.collection.push(dino);
}

Park.prototype.removeDinosaur = function(){
  this.collection.pop();
}


Park.prototype.mostPopular = function(){

  let mostPop;
  let count = 0;

  for(dino of this.collection){
    if(dino.guestsAttractedPerDay > count){
      mostPop = dino;
    }
  }
  return mostPop;
}


module.exports = Park;
