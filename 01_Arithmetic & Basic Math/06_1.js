const input = require('prompt-sync')();

const length = Number(input("Enter length here = "))
const width = Number(input("Enter width here = "))

console.log("Perimeter of Rectangle = ", (length + width) * 2);
