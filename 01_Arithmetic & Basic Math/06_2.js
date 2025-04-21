const input = require('prompt-sync')();

const radius = Number(input("Enter radius here = "))

console.log("Area of Circle = ", Number((2 * Math.PI * radius).toFixed(2)));
