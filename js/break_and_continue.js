"use strict";

let oddNums = "Here is an odd number: ";
let userNum = prompt("Please enter an odd number between 1 and 50");

while(true) {

    if (userNum % 2 === 1 && userNum <= 50 && userNum >= 1) {
        break;

    }
}

for (let i = 1; i <= 50; i += 2) {
    if (userNum == i) {
        console.log("Yikes, skipping this number: " + userNum);
        continue;
    }
    console.log(oddNums + i);
}

