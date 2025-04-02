// let findSum = (i1, i2, i3) => i1 + i2 + i3;

// let findAverage = (i1, i2, i3) => findSum(i1, i2, i3) / 3;

// let average = findAverage(1, 2, 3)

// console.log(`Average = ${average}`)


const animal = {
  type: "snake",
  weight: 5.5,
  length: 4,
  name: 'Stanley'
} 

class BetterAnimal {
  constructor(type, length, name, weight) {
    this.type = type
    this.length = length
    this.name = name
    this.weight = weight
  }
  
  printDetails() {
    return `Type: ${this.type}, Name: ${this.name}`
  }
}

// function BetterAnimal(type, length, name, weight) {
//   this.type = type
//   this.length = length
//   this.name = name
//   this.weight = weight
// }

// BetterAnimal.prototype.printDetails = function() {
//   return `Type: ${this.type}, Name: ${this.name}`
// }

const animal2 = new BetterAnimal("elephant", 5, "Jumbo", 300)
const animal3 = new BetterAnimal("bird")
console.log(animal3)

console.log(animal2.printDetails())

animal2.age = 0.5
console.log(animal2)

console.log(animal)
animal.weight += 6
console.log(animal.weight)

animal.age = 500
console.log(animal)



