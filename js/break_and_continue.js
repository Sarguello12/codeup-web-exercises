"use strict";

let oddNums = "Here is an odd number: ";
let userNum = Number(prompt("Please enter an odd number between 1 and 50"));
if(userNum % 2 === 0 || userNum > 50 || userNum < 0) {
    alert("That is not an odd number between 1 and 50!")
} else {

    for (let i = 1; i <= 50; i += 2) {
        if (userNum === i) {
            console.log("Yikes, skipping this number: " + userNum);
            continue;
        }
        console.log(oddNums + i);
    }

}