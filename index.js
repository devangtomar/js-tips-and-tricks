// For swaping

let num1 = 10;
let num2 = 20;

[num2, num1] = [num1, num2];

console.log(num1); // 20
console.log(num2);
// 10

// Operator - 1

0 == false; // true
0 === false; // false
2 == "2"; // true
2 === "2";
// false

// example
const val = "123";

if (val === 123) {
    console.log(val);
    // it cannot not be reached
}

if (val === "123") {
    console.log(val);
    // it can be reached
}

// Operator - 2

if (twitter) {
    followme("DevangTomar7");
}

twitter & followme("DevangTomar7");

// Passing arguments as objects

const createProduct = ({name, description, price}) => { // Create the product
} createProduct((name : "Pizza", description : "Hot, crispy and tasty!", price : 10.99,));

// format json output with spaces

const profile = {
    name: "Devang",
    age: 26,
    dateJoined: "07-07-2000"
};

JSON.stringify(profile, null, 2);

// {
//     name: "Devang",
//     age: 26,
//     dateJoined: "07-07-2000",
// }

// Spread operator

const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
const person = {
    name: "Devang",
    active: false
};

console.log([
    ... numbers,
    9,
    10
]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log([
    ... person,
    active : true
]) // { name: "Devang", active: true }
console.log([
    ... person,
    age : 25
])
// { name: "Devang", active: false, age: 25 }

// Remove duplicates using Set

const numbers = [
    1,
    1,
    2,
    2,
    4,
    4,
    4,
    4,
    5
];
const fruits = [
    "apple",
    "pear",
    "banana",
    "apple",
    "apple",
    "cherry"
];

const uniqueNumbers = [...new Set(numbers)];
const uniqueFruits = [...new Set(fruits)];

console.log(uniqueNumbers); // [1, 2, 4, 5]
console.log(uniqueFruits);
// ["apple", "pear", "banana", "cherry"]

// Use reduce() map() and filter() instead of regular for loops

let orders = [
    1,
    2,
    3,
    4,
    5
];
const total = orders.reduce((acc, cur) => acc + cur);
console.log(total); // Result: 15

let orders = [
    1,
    2,
    3,
    4,
    5
];
const total = orders.map((item) => item * 2);
console.log(total); // Result: [2, 4, 6, 8, 10]

let orders = [
    1,
    2,
    3,
    4,
    5
];
const total = orders.filter((item) => item > 3);
console.log(total);
// Result: [4, 5]

// Conditional operator

const hour = 5;
if (hour < 18) {
    console.log('Good day');
} else {
    console.log('Good evening');
} // Result: Good day

const hour = 5;
hour < 18 ? console.log('Good day') : console.log('Good evening');
// Result: Good day

// String on steriods

const name = 'Charlie';
const greeting = `Good day, ${name}.`;
console.log(greeting);
// "Good day, Charlie."

// Convert a Number to a String

const num = 1 + "";
console.log(typeof num); // "string"
console.log(num);
// "1"

// Convert a String to a Number

const numStr = "84";
const num = + numStr;
console.log(typeof num); // "number"
console.log(num);
// 84

// Split a String into an Array

const str = "Test"
const arr = [... str]
// application of the spread operator ...
// arr = ["T", "e", "s", "t"]

// Mask numbers using slice and padStart

const cardNumber = '89898908976656232';
const last4Digit = cardNumber.slice(-4);
const maskNumber = last4Digit.padStart(cardNumber.length, "*");

console.log(maskNumber); // *********6232
