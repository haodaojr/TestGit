// hello.js - Basic JavaScript examples for beginners // Tên file và mô tả
// Run this file with: node hello.js // Hướng dẫn chạy file
console.log("Hello, Node.js! My first program."); // In lời chào đầu tiên
const message = "My Node.js app is running!"; // Khai báo biến message
console.log(message); // In ra nội dung của biến message
const name = "Hank"; // Khai báo biến name
console.log(`Hello, ${name}! Learning Node.js is fun!`); // Sử dụng biến name trong chuỗi
let age = 25; // Khai báo biến age bằng 25
console.log(`I am ${age} years old.`); // In ra tuổi hiện tại
if (age >= 18) { // Kiểm tra nếu age >= 18
  console.log("You are an adult."); // Nếu đủ 18 tuổi thì in thông báo người lớn
} else {
  console.log("You are a minor."); // Nếu nhỏ hơn 18 tuổi thì in thông báo trẻ vị thành niên
}
age = 30; // Gán lại giá trị age là 30
console.log(`I am now ${age} years old.`); // In ra tuổi sau khi thay đổi
let isStudent = true; // Khai báo biến isStudent có giá trị true
console.log(`I am a student: ${isStudent}`); // In trạng thái là sinh viên
isStudent = false; // Thay đổi isStudent thành false
console.log(`I am no longer a student: ${isStudent}`); // In trạng thái không còn là sinh viên
let hobbies = ["reading", "coding", "gaming"]; // Mảng sở thích ban đầu
console.log(`My hobbies: ${hobbies.join(", ")}`); // In ra các sở thích
hobbies.push("traveling"); // Thêm sở thích mới vào mảng
console.log(`My updated hobbies: ${hobbies.join(", ")}`); // In ra mảng sở thích sau khi thêm
for (const hobby of hobbies) { // Lặp qua từng sở thích
  console.log(`I enjoy ${hobby}`); // In ra từng sở thích
}
let person = { // Đối tượng person với các thuộc tính
  name: "Hank", // Tên của người
  age: 25, // Tuổi ban đầu
  isStudent: true, // Trạng thái là sinh viên
  hobbies: ["reading", "coding", "gaming"], // Danh sách sở thích
};
console.log(`Person's name: ${person.name}`); // In tên của person
console.log(`Person's age: ${person.age}`); // In tuổi của person
console.log(`Person is a student: ${person.isStudent}`); // In trạng thái sinh viên
console.log(`Person's hobbies: ${person.hobbies.join(", ")}`); // In danh sách sở thích của person
person.age = 30; // Cập nhật tuổi của person
console.log(`Person's updated age: ${person.age}`); // In tuổi mới sau cập nhật
function greet(name) { // Định nghĩa hàm greet nhận tham số name
  console.log(`Hello, ${name}!`); // In lời chào với tên truyền vào
}
greet("Hank"); // Gọi hàm greet với tham số "Hank"
greet("Alice"); // Gọi hàm greet với tham số "Alice"
greet("Bob"); // Gọi hàm greet với tham số "Bob"

const sum = (a, b) => a + b; // Hàm arrow tính tổng a và b
console.log(`Sum of 2 and 3: ${sum(2, 3)}`); // In tổng 2 và 3
console.log(`Sum of 5 and 7: ${sum(5, 7)}`); // In tổng 5 và 7
console.log(`Sum of 10 and 15: ${sum(10, 15)}`); // In tổng 10 và 15

const sayHello = (name = "World") => { // Hàm arrow có tham số mặc định
  console.log(`Hello, ${name}!`); // In lời chào với tham số name
};
sayHello(); // Gọi hàm không truyền tham số

let number = [1, 2, 3, 4, 5]; // Mảng số nguyên
let double = number.map((num) => num * 2); // Tạo mảng mới với giá trị gấp đôi
let evens = number.filter((num) => num % 2 === 0); // Lọc các số chẵn
let sumNumbers = number.reduce((acc, num) => acc + num, 0); // Tính tổng các phần tử
console.log(`Double of the numbers: ${double.join(", ")}`); // In mảng nhân đôi
console.log(`Evens of the numbers: ${evens.join(", ")}`); // In các số chẵn
console.log(`Sum of the numbers: ${sumNumbers}`); // In tổng các số
for (let i = 0; i < number.length; i++) { // Lặp qua mảng number
  console.log(`number[${i}] = ${number[i]}`); // In chỉ số và giá trị tương ứng
}

let fruit = ["apple", "banana", "orange"]; // Mảng tên trái cây
fruit.push("grape"); // Thêm "grape" vào mảng
let upperCaseFruit = fruit.map((fruit) => fruit.toUpperCase()); // Chuyển tên trái cây thành chữ hoa
let fruitLengths = fruit.map((fruit) => fruit.length); // Lấy độ dài từng chuỗi
let longFruits = fruit.filter((fruit) => fruit.length > 5); // Lọc trái cây tên dài hơn 5 ký tự
console.log(`Uppercase fruits: ${upperCaseFruit.join(", ")}`); // In danh sách trái cây chữ hoa
console.log(`Fruit name lengths: ${fruitLengths.join(", ")}`); // In độ dài tên các trái cây
console.log(`Fruits with more than 5 characters: ${longFruits.join(", ")}`); // In trái cây có tên dài > 5 ký tự

let student = { // Đối tượng student
  name: "Hank", // Thuộc tính name
  age: 25, // Thuộc tính age
  isStudent: true, // Thuộc tính isStudent
  hobbies: ["reading", "coding", "gaming"], // Thuộc tính hobbies
  greet: function () { // Phương thức greet của đối tượng
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old!`
    ); // In ra thông tin của student
  },
};
student.greet(); // Gọi phương thức greet của đối tượng student
