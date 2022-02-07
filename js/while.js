"use strict";

// While loop
// let number = 1
//
// while(number <= 60000){
//     number = number * 2;
//     console.log(number);
// }


// Do-while loop
let allCones = Math.floor(Math.random() * 50) + 50;
let conesBought;

do {
    conesBought = Math.floor(Math.random() * 5) + 1;
    console.log("I have " + allCones + " to sell!")

    if (conesBought > allCones) {
        console.log("I cannot sell you " + conesBought + " cones, I only have " + allCones + ".");
        continue;
    }

    allCones = allCones - conesBought;
    console.log(conesBought + " cones sold!");

} while (allCones > 0);
    console.log("Yay! I sold them all!");
    console.log(allCones);


