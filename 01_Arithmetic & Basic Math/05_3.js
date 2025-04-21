const input = require('prompt-sync')();

const base = Number(input("Enter base here = "))
const height = Number(input("Enter height here = "))

console.log("Area of Triangle = ", (base * height) / 2);
