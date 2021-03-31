const numbers = [1, 4, 9, 16];

const newNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(newNumbers);


//An example of a class in Javascript to reference object oriented programming
class Developer { constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName; }
    getName() {
    return this.firstName + ' ' + this.lastName;
    } }

    // class definition
class Developer { ... } // class instantiation
const robin = new Developer('Robin', 'Wieruch'); 

console.log(robin.getName());
// "Robin Wieruch"
// another class instantiation
const dennis = new Developer('Dennis', 'Wieruch');