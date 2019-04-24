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

Park.prototype.removeSelectedDino = function(dino){
  const index = this.collection.indexOf(dino);
  this.collection.splice(index, 1);
}

Park.prototype.mostPopular = function(){

  let mostPop;
  let count = 0;

  for(dino of this.collection){

    if(dino.guestsAttractedPerDay > count){
      count = dino.guestsAttractedPerDay;
      mostPop = dino;
    }
  }
  return mostPop;
}

Park.prototype.species = function(species){

  let speciesArr = [];

  for(dino of this.collection){
    if(dino.species === species){

      speciesArr.push(dino);

    }

  }

  return speciesArr;
}

Park.prototype.removeAllSpecies = function(species){
  for(var i=0; i<this.collection.length; i++){
    let dino = this.collection[(this.collection.length-1)- i]
    if(dino.species === species){
      this.removeSelectedDino(dino);
    }
  }
}

module.exports = Park;
