const add = (a, b) => {
  //console.log(arguments)
  return a + b
}
console.log(add(55, 1, 1001))

const user = {
  name: 'Sam',
  cities: ['London', 'Sydney', 'Brighton'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
  }
}
console.log(user.printPlacesLived())

// Challenge

const multiplier = {
  numbers: [10, 20, 30],
  multipyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multipyBy)
  }
}

console.log(multiplier.multiply())