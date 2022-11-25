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

const createProduct = ({ name, description, price}) => {
    // Create the product
}

createProduct((
    name: "Pizza",
    description: "Hot, crispy and tasty!",
    price: 10.99,
));

// format json output with spaces

const profile = {
    name: "Devang",
    age: 26,
    dateJoined: "07-07-2000",
};

JSON.stringify(profile, null, 2);

// {
//     name: "Devang",
//     age: 26,
//     dateJoined: "07-07-2000",
// }

// Spread operator

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const person = {
    name: "Devang",
    active: false,
};

console.log([...numbers, 9, 10]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log([...person, active: true]) // { name: "Devang", active: true }
console.log([...person, age: 25]) // { name: "Devang", active: false, age: 25 }

// Remove duplicates using Set

const numbers = [1, 1, 2, 2, 4, 4, 4, 4, 5];
const fruits = ["apple", "pear", "banana", "apple", "apple", "cherry"];

const uniqueNumbers = [...new Set(numbers)];
const uniqueFruits = [...new Set(fruits)];

console.log(uniqueNumbers); // [1, 2, 4, 5]
console.log(uniqueFruits);  // ["apple", "pear", "banana", "cherry"]

