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
