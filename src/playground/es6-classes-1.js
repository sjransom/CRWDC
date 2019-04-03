class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi, I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, degree) {
    super(name, age)
    this.degree = degree
  }
  hasDegree() {
    return !!this.degree
  }
  getDescription() {
    let description = super.getDescription()

    if (this.hasDegree()) {
      description += ` Their major is ${this.degree}.`
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()

    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`
    }

    return greeting
  }
}

const me = new Traveler('Sam Ransom', 29, 'London')
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())