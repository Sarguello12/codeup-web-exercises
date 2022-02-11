"use strict";

function doesJsUnderstand(input) {
        return "I have no idea what you just said";
}
// console.log(doesJsUnderstand("hi"));

function numTimesTwo(num) {
    return num * 2;
}
// console.log(numTimesTwo(2));
// console.log(numTimesTwo(100));

function numPlusItself(num) {
    return num + num;
}
// console.log(numPlusItself(8));


function doubleSum(num1, num2) {
    return (num1 *= 2) + (num2 *= 2);
}
// console.log(doubleSum(2, 2));


function squareRoot(num) {
    return num**2;
}
// console.log(squareRoot(2));


function strLength(str) {
    return str.length;
}
// console.log(strLength("hi"))


function twoStrings(str1, str2){
    return (str1.length) + (str2.length);
}
// console.log(twoStrings("hi", "hello"));


function evenOrOdd(num) {
    if(num % 2 === 0) {
        return "even";
    } else {
        return "odd"
    }
}
// console.log(evenOrOdd(2));
// console.log(evenOrOdd(3));

let exampleArr = ["abc", "ab", "cat", "Bay"];

function removeBs(arr) {
    return arr.join(",")
        .replaceAll("b", "")
        .replaceAll("B", "")
        .split(",");

    // original solution

    // let strArr = arr.join(",").toLowerCase();
    // let noBs = strArr.replaceAll("b", "");
    // return noBs.split(",");
}


// console.log(removeBs(exampleArr));

// Solution using loops
function removeBsFromString(str) {
    return str.replaceAll("b", "").replaceAll("B", "");
}

function removeThoseBs(arr) {
    let output = [];
    arr.forEach(function(str) {
        output.push(removeBsFromString(str));
    });
    return output;
}

// console.log(removeThoseBs(exampleArr));