//mini exercises for functions lecture 02/01/

function returnFive() {
    return 5;
}
//console.log(returnFive());

function isFive(input) {
    if (input == 5) {
        return true;
    } else {
        return false;
    }
}
//console.log(isFive("5"));

function isShortWord(str) {
    if (str.length < 5) {
        return true;
    } else {
        return false;
    }
}
//console.log(isShortWord("short"));

function isSameLength(str1, str2) {
    if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
}
//console.log(isSameLength("five", "cats"));

function getSmallerSegment(str, num) {
    return str.substring(0, num).toLowerCase();
}
//console.log(getSmallerSegment("Codeup", 2));
//console.log(getSmallerSegment("Hello World", 7));

function total(num1, num2) {
    return "The result of num1 + num2 is: " + (num1 + num2);
}
// console.log(total(2,4));
// console.log(total(5,1));
// console.log(total(10,5));

function doMath(op, num1, num2) {
    let cleanOp = op.toLowerCase();

    if (cleanOp === "add") {
        return num1 + num2;
    } else if (cleanOp === "subtract") {
        return num1 - num2;
    } else if (cleanOp === "multiply") {
        return num1 * num2;
    } else if (cleanOp === "divide") {
        return num1 / num2;
    } else if (cleanOp === "remainder") {
        return num1 % num2;
    } else {
        return "Please Check inputs.";
    }
}

// console.log(doMath("add", 2, 2));
// console.log(doMath("subtract", 2, 2));
// console.log(doMath("multiply", 2, 2));
// console.log(doMath("divide", 2, 2));
// console.log(doMath("remainder", 5, 2));
// console.log(doMath(0, 0, 0));
// console.log(doMath("ADD", 2,2));
// console.log(doMath("SUBTRACT", 2,2));
// console.log(doMath("MULTIPLY", 2,2));
// console.log(doMath("DIVIDE", 2,2));
// console.log(doMath("REMAINDER", 5,2));

function lastA(str) {
    if (str.endsWith('a')) {
        return "Looks like that word ends with the letter A";
    } else {
        return "Hmm, doesn't seem to end with the letter A";
    }
}
// console.log(lastA("armada"));
// console.log(lastA("cat"));

function rollDice(numOfDie) {
    let diceSides = Math.floor(Math.random() * 6) + 1;
    return diceSides * numOfDie;
}

//console.log(rollDice(3));

function identity(input) {
    return typeof input;
}
// console.log(identity("hello"));
// console.log(identity(2));
// console.log(identity(true));

let carIsLocked = false;
    if (carIsLocked === false) {
        alert("Will open.");
    } else {
        alert("Will not open.");
    }


function strLength(str) {
    if (str.length === 0) {
        return "Empty string.";
    } else if (str.length === 1) {
        return "One character long.";
    } else if (str.length === 2) {
        return "Two character long.";
    } else {
        return "That's a long string";
    }
}
// console.log(strLength("w"));
// console.log(strLength( ""));
// console.log(strLength("Narwhal"));

let num = 5;
const message = (num < 10) ? 'Num less than 10' : 'Num more than 10';
// console.log(message);