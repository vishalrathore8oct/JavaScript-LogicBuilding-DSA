// You're on a camping trip with your friends, and you all want to set up a starry mountain as a symbol of your adventure. To make things more fun, you decide to use stars to draw an inverted mountain pattern. The challenge: print it so everyone can admire the majestic mountain shape! ⛰️⭐

// Problem Statement:
// Create a function invertedMountain(n) that prints an inverted mountain made of stars. The number n represents the number of stars at the top, and the pattern should reduce by one star each line until only one star is left at the bottom.

// For example:

// For n = 4, the output will look like:
// ****
// ***
// **
// *

function invertedMountain(n) {
    let stars = ""
    let i = 0;
    while (i < n) {
        let j = 0;
        while (j < n - i) {  
            stars += "*"
            j++;
        }
        stars += "\n"
        i++;
    }
    return stars
}


