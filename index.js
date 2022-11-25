

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
