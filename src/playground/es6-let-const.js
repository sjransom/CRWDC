var nameVar = 'Sam'
nameVar = 'Andrew'
console.log('nameVar', nameVar)

let nameLet = 'Daisy'
nameLet = 'Ollie'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

// Block scoping

const fullName = 'Sam Ransom'
let firstName

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}

console.log(firstName)