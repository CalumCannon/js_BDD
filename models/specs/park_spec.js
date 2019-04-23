const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {

    park = new Park("parkName", 10);

    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('z-rex', 'carnivore', 100);

    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'parkName');
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dinosaur,dinosaur2]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur)
    const actual = park.collection.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to remove a dinosaur from its collection',function(){
    park.addDinosaur(dinosaur)
    park.removeDinosaur()
    const actual = park.collection.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopular();
    assert.strictEqual(actual, dinosaur2);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.species('t-rex');
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.removeAllSpecies('t-rex');
    const actual = park.collection;
    assert.deepStrictEqual(actual, [dinosaur]);
  });

});
