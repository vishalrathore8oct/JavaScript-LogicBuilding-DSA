const input = require('prompt-sync')();

const radius = Number(input("Enter radius here = "))

console.log("Area of Circle = ", Number((Math.PI * (radius ** 2)).toFixed(2)));
