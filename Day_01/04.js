// You are organizing a number-checking game. Each participant provides a number, and you need to determine if it is even or odd.

// Challenge
// Problem Statement: Create a function that takes a number as input and returns "Even" if the number is even, otherwise returns "Odd".

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}