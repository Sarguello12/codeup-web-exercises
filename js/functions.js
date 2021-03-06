"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello , " + name + "!";
}
// console.log(sayHello("Sam"));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Sam");
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

let myName = "Sam";
// console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(num) {
    return num === 2;
}
// console.log(isTwo(2));
// console.log(isTwo(4));
// console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercent, totalBillDollars) {
    let tipDecimal = tipPercent * 0.01;
    let totalTip = tipDecimal * totalBillDollars;
    return totalTip.toFixed(2);
}
// console.log(calculateTip(0.20, 20), 4)
// console.log(calculateTip(0.25, 25.50), 6.375)
// console.log(calculateTip(0.15, 33.42), 5.013)

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
const totalBillDollars = Number(prompt("What was your total bill?"));
const tipPercent = Number(prompt("What percent would you like to tip?"));
alert("For your $" + totalBillDollars + " bill, you will want to tip $" + calculateTip(tipPercent, totalBillDollars) + "!");

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(preDiscountPrice, discountPercent) {
    let discountAmount = preDiscountPrice * discountPercent;
    if (discountPercent <= 1) {
        return preDiscountPrice - discountAmount;
    } else if (discountPercent > 1) {
        return "Invalid discount percent!";
    }
}
// console.log(applyDiscount(100, 0.2), 80);
// console.log(applyDiscount(75, 0.5), 37.5);
// console.log(applyDiscount(50, 1), 0);
// console.log(applyDiscount(100, 1.5) , "invalid");
// console.log(applyDiscount(100, 2), "invalid");
