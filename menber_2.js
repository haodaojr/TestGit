console.log("Hello, Node.js! My first program.");
const message = "My Node.js app is running!";
console.log(message);
const name = "Hank";
console.log(`Hello, ${name}! Learning Node.js is fun!`);
let age = 25;
console.log(`I am ${age} years old.`);
age = 30;
console.log(`I am now ${age} years old.`);
let isStudent = true;
console.log(`I am a student: ${isStudent}`);
isStudent = false;
console.log(`I am no longer a student: ${isStudent}`);
let hobbies = ["reading", "coding", "gaming"];
console.log(`My hobbies: ${hobbies.join(", ")}`);
hobbies.push("traveling");
console.log(`My updated hobbies: ${hobbies.join(", ")}`);
let person = {
  name: "Hank",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "coding", "gaming"],
};
console.log(`Person's name: ${person.name}`);
console.log(`Person's age: ${person.age}`);
console.log(`Person is a student: ${person.isStudent}`);
console.log(`Person's hobbies: ${person.hobbies.join(", ")}`);
person.age = 30;
console.log(`Person's updated age: ${person.age}`);
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Hank");
greet("Alice");
greet("Bob");

const sum = (a, b) => a + b;
console.log(`Sum of 2 and 3: ${sum(2, 3)}`);
console.log(`Sum of 5 and 7: ${sum(5, 7)}`);
console.log(`Sum of 10 and 15: ${sum(10, 15)}`);

const sayHello = (name = "World") => {
  console.log(`Hello, ${name}!`);
};
sayHello();

let number = [1, 2, 3, 4, 5];
let double = number.map((num) => num * 2);
let evens = number.filter((num) => num % 2 === 0);
let summ = number.reduce((acc, num) => acc + num, 0);
console.log(`Double of the numbers: ${double.join(", ")}`);
console.log(`Evens of the numbers: ${evens.join(", ")}`);
console.log(`Sum of the numbers: ${summ}`);

let fruit = ["apple", "banana", "orange"];
fruit.push("grape");
let upperCaseFruit = fruit.map((fruit) => fruit.toUpperCase());
let fruitLength = fruit.map((fruit) => fruit.length > 5);
console.log(`Uppercase fruits: ${upperCaseFruit.join(", ")}`);
console.log(`Fruits with more than 5 characters: ${fruitLength.join(", ")}`);

let student = {
  name: "Hank",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "coding", "gaming"],
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old!`
    );
  },
};
student.greet();
