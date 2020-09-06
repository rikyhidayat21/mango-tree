"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (healthStatus = true, harvested, maxAge = 17, maxHeight = 17, stopProduction = 16, matureAge = 7) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = healthStatus
    this._harvested = harvested
    this._maxAge = maxAge
    this._maxHeight = maxHeight
    this._stopProduction = stopProduction
    this._matureAge = matureAge
  }

  get age () {
    return this._age;
  }
  get maxAge() {
    return this._maxAge;
  }

  get height () {
    return Number(this._height.toFixed(2))
  }
  get maxHeight() {
    return this._maxHeight;
  }

  get fruits () {
    return this._fruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }
  set healthStatus (value) {
    this._healthStatus = value
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    // nambah umur
    this._age++
    if (this._age === this._maxAge) {
      this._healthStatus = false
    }

    if (this._age <= 13) {
      let growUp = Math.random()
      this._height += growUp
      if (this._height >= this._maxHeight) {
        this._height = this._maxHeight
      } 
    } else if (this._age > 13 && this._age <= this._maxAge) {
      this._healthStatus = true
    } else {
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes () {
    
    // menentukan umur untuk pohon berhenti bertambah tinggi
    if (this._age >= 13 && this._age === this._stopProduction) {
      
    }
  }

  // Get some fruits
  harvest () {

  }

}

class Mango {
  // Produce a mango
  constructor () {
    
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */

  let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  // mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}