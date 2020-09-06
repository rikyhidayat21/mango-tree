"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (healthStatus = true, maxAge = 17, maxHeight = 17, stopProduction = 16, matureAge = 7, typeFruit) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = healthStatus
    this._harvested = ''
    this._maxAge = maxAge
    this._maxHeight = maxHeight
    this._stopProduction = stopProduction
    this._matureAge = matureAge
    this._typeFruit = typeFruit
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
    
    // menentukan pohon hanya akan berbuah ketika sudah mencapai mature age
    // menentukan umur dimana pd umur tersebut tidak dapat berbuah lagi 
    if (this._age >= this._matureAge && this._age <= this._stopProduction) {
      const buah = Math.floor(Math.random() * 20)
      
      for (let i = 0; i < buah; i++) {
        this._fruits.push(new Mango)
      }
    }
    return(this._fruits)
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality === 'good' ) {
        good++
      } else {
        bad++
      }
    }
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
    this._fruits = []
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this._quality = this.randomMango()
  }
  randomMango() {
    let random = Math.random()
    if (random < 0.5) return 'good'
    else return 'bad'
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
console.log('==============MANGO TREE REPORT==================')

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
// Release 1
class AppleTree extends MangoTree{
  constructor() {
    super(true, 20, 20, 17, 3, Apple)
  }
}
class Apple extends Mango {}

console.log('==============APPLE TREE REPORT==================')

let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)

// Release 2
class FruitTree {}
class Fruit {}