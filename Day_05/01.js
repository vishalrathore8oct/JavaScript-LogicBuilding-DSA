// You’ve been tasked with designing the perfect shiny diamond rug cursh’s room. They love stars, and you’ve decided to make a sparkling pattern using them. You need to help them create this rug, where the stars are arranged in the shape of a diamond! 🎇✨

// Problem Statement:
// Create a function shinyDiamondRug(n) that prints a shiny diamond shape made of stars. The number n represents the size of the diamond, with the middle of the diamond having 2n - 1 stars.


// Important Rules:
// 1️⃣ Each line must not have trailing spaces.
// 2️⃣ The output must not have an extra newline at the end.

// For example:

// For n = 4, the output will look like:
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *


function shinyDiamondRug(n) {
    let diamond = ""
    // upper diamond
    let i = 1
    while(i <= n) {
        let j = 1 
        while(j <= (n - i)) {
            diamond += " "
            j++
        }
        let k = 1
        while(k <= ((2*i)-1)) {
            diamond += "*"
            k++
        }
        i++ 
        diamond += "\n"
    }
    // lower diamond
    i = n - 1
    while(i >= 1) {
        let j = 1 
        while(j <= (n - i)) {
            diamond += " "
            j++
        }
        let k = 1
        while(k <= ((2*i)-1)) {
            diamond += "*"
            k++
        }
        i-- 
        diamond += "\n"
    }
    return diamond
}

