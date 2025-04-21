const input = require('prompt-sync')();

const num1 = Number(input("Enter num1 here = "))
const num2 = Number(input("Enter num2 here = "))

if (num2 == 0) {
    console.log("Cannot divide by zero");

} else {

    console.log("Division = ", num1 / num2);
}
