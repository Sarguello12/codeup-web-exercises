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

let user = {
    userName: 'jbomb',
    email: 'john@email.com',
    isAdmin: true
}

function createUserMessage(obj){
    if(obj.isAdmin === true) {
        console.log('User ' + obj.userName + ' is an admin and can be reached at ' + obj.email);
    } else {
        console.log('User ' + obj.userName + ' is not an admin and can be reached at ' + obj.email);
    }
}

// createUserMessage(user);

function areaOrPerimeter(l, w) {
    if(l === w){
        return "area of the square is " + l * w;
    }
    if(l !== w){
        return "area of the rectangle is " + w * l;
    }
}

// console.log(areaOrPerimeter(3, 3))
// console.log(areaOrPerimeter(3, 5))


let firstNames = ["CJ", "Max", "Claude", "Meowmeow"];
let lastNames = ["Cat", "Feline", "Kitten", "Calico"];

function createNames(firstNames, lastNames){
    let fullNames = [];
    let catName;

    for(let i = 0; i < firstNames.length; i++){
        for(let j = 0; j < lastNames.length; j++){
            catName = {firstName: firstNames[i], lastName: lastNames[i]};
        }
        fullNames.push(catName);
    }
    return fullNames;
}
// console.log(createNames(firstNames, lastNames));

let parcels = [{parcelNumber: 1, weight: 20}, {parcelNumber: 2, weight: 25}];

function returnWeight(parcel){
    console.log(parcel.weight);
}


// function totalParcelWeight(parcels){
//     let total = 0;
//     parcels.forEach(function(parcel){
//         total += parcel.weight
//     })
//     return total;
// }
// console.log(totalParcelWeight(parcels));

// function presentTotal(arr){
//     let outputDiv = document.querySelector(".output");
//     let html = " ";
//
//     let total = 0;
//     parcels.forEach(function(parcel){
//         total += parcel.weight;
//         html += "<h1>" + total + "</h1>";
//     })
//     outputDiv.innerHTML = html;
// }
//
// presentTotal(parcels);

// function changeTime(){
//     message.innerText = "Good Afternoon";
// }
//
// let message = document.querySelector("h1");
// let button = document.querySelector("button");
// button.addEventListener("click", changeTime);

// ================================= JS WARM UP
//
// Consider the following array of users:

    var users = [
        {
            username: 'fsmith',
            email: 'fsmith@email.com',
            numberOfLogins: 23
        },
        {
            username: 'ksmith',
            email: 'ksmith@email.com',
            numberOfLogins: 100
        },
        {
            username: 'lsmith',
            email: 'lsmith@email.com',
            numberOfLogins: 10
        }
    ];

// 1. Create a function, returnFirstUser, that takes in an array of user objects and returns the first user object.
//
// returnFirstUser(users) should return...
//
// {
//     username: 'fsmith',
//         email: 'fsmith@email.com',
//     numberOfLogins: 23
// }

    function returnFirstUser(users){
        return users[0];
    }
// console.log(returnFirstUser(users));

// 2. Create a function, returnTotalUserLogins, that takes in an array of user objects and returns the total count of logins
// for all users.
//
// returnTotalUserLogins(users) should return... 133

    function returnTotalUserLogins(users){
        let total = 0;

        users.forEach(function(user){
            total += user.numberOfLogins;
        });
        return total;
    }
// console.log(returnTotalUserLogins(users));

// 3. (optional bonus) create a function, returnMostFrequentUser, that takes in an array of user objects and returns the
// user object with the highest number of logins.
//
//
// returnMostFrequentUser(users) should return...
//
// {
//     username: 'ksmith',
//         email: 'ksmith@email.com',
//     numberOfLogins: 100
// }

    function returnMostFrequentUser(users){
        let mostFrequentUser = users.sort((a, b) => b.numberOfLogins - a.numberOfLogins);
        return mostFrequentUser[0];
    }

    // alternate solution using a loop

    // function returnMostFrequentUser(users){
    //     let mostFrequentUser = {
    //         numberOfLogins: 0
    //     };
    //     users.forEach(function(user){
    //         if(user.numberOfLogins > mostFrequentUser.numberOfLogins){
    //             mostFrequentUser = user;
    //         }
    //     });
    //     return mostFrequentUser;
    // }

// console.log(returnMostFrequentUser(users));

// ================================= WARM UP
//
// Create a function, computeOperations, that takes in an array of operation objects and a starting integer value and returns an integer after all the calculations have completed, using the second integer argument as the first operand. Each operation object will have the following shape:
//
// {
//     operation: 'subtract' (or 'multiply' or 'add'),
//     integer: 7 (or any positive or negative integer)
// }
//
// Example 1...

// function computeOperations(operations, startingInt){
//         let total = startingInt;
//
//         for(let i=0; i < operations.length; i++){
//             if(operations[i].operation === "add"){
//             total += operations[i].integer;
//             }
//             if(operations[i].operation === "subtract"){
//                 total -= operations[i].integer;
//             }
//             if(operations[i].operation === "multiply"){
//                 total *= operations[i].integer;
//             }
//             if(operations[i].operation === "divide"){
//                 total /= operations[i].integer;
//             }
//         }
//         return total;
// }

//
// function computeOperations(operations, startingInt){
//     let total = startingInt;
//
//     operations.forEach(function(operation){
//         if(operation.operation === "add"){
//             total += operation.integer;
//         }
//         if(operation.operation === "subtract"){
//             total -= operation.integer;
//         }
//         if(operation.operation === "multiply"){
//             total *= operation.integer;
//         }
//         if(operation.operation === "divide"){
//             total /= operation.integer;
//         }
//     })
//     return total;
// }

function computeOperations(operations, startingInt){
    let total = startingInt;

    operations.forEach(function(operation){
        switch(operation.operation){
            case "add":
                total += operation.integer;
                break;
            case "subtract":
                total -= operation.integer;
                break;
            case "multiply":
                total *= operation.integer;
                break;
            case "divide":
                total /= operation.integer;
                break;
        }
    })
    return total;
}


var operations1 = [

    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    }
]

// console.log(computeOperations(operations1, 10));

//
//
// computeOperations(operations1, 10) // returns 20
//
//
// Example 2...
//
var operations2 = [

    {
        operation: 'add',
        integer: 7
    },
    {
        operation: 'add',
        integer: 3
    },
    {
        operation: 'multiply',
        integer: 3
    },
]

// console.log(computeOperations(operations2, 10));

//
// computeOperations(operations2, 10) // returns 60
//
//
// Example 3...
//
var operations3 = [

    {
        operation: 'subtract',
        integer: 5
    },
    {
        operation: 'multiply',
        integer: -2
    },
    {
        operation: 'add',
        integer: 10
    },
]

// console.log(computeOperations(operations3, 10));
//
// computeOperations(operations3, 10) // returns 0

// ================================= WARM UP
//
// Create a function, addTwos, that takes in a array of integers and returns the sum of all 2s in the array. If no 2s are in the array, return 0.
//
// Examples:
//
// var nums1 = [1, 2, 3, 4, 5];
// var nums2 = [2, 2, 3, 4, 5];
// var nums3 = [10, 0, -5, 4, 5];
// var nums4 = [2, 2, -5, 2, 2];
// var nums5 = [2, 2, 2, 2, 2];

function addTwos(nums){
    let total = 0;

    nums.forEach(function(num){
        if(num === 2){
            total += num;
        }
    })
    return total;
}

//
// console.log(addTwos(nums1), 2); // returns 2
// console.log(addTwos(nums2), 4); // returns 4
// console.log(addTwos(nums3), 0); // returns 0
// console.log(addTwos(nums4), 8); // returns 8
// console.log(addTwos(nums5), 10); // returns 10

// ================================= WARM UP
//
// Write a function, returnStringObject, that takes in a string and returns an object with information about the string. The object should have properties for stringValue and stringArray.
//
//     Examples...
//
// returnStringObject('hello') // returns...
//
// {
//     stringValue: 'hello',
//         stringArray: ['h', 'e', 'l', 'l', 'o']
// }
//
// returnStringObject('codeup') // returns...
//
// {
//     stringValue: 'codeup',
//         stringArray: ['c', 'o', 'd', 'e', 'u', 'p']
// }

function returnStringObject(str){
    return {
        "stringValue": str,
        "stringArray": str.split("")
    }
}

// console.log(returnStringObject("hello"));

// ================================= JS WARM UP
// Write a function, countNegatives, and takes in a array of integers and returns the total number of negative numbers. 0 should be considered a non-negative number. If no negative numbers are present, return 0.
var nums1 = [-5, 10, 2, 5]; // countNegatives(nums1) returns 1
var nums2 = [1, -10, -2, 5]; // countNegatives(nums2) returns 2
var nums3 = [3, 10, 2, 5]; // countNegatives(nums3) returns 0
var nums4 = [-3, -10]; // countNegatives(nums4) returns 2

function countNegatives(numArr){
    let total = 0;

    numArr.forEach(function(num){
        if (num < 0){
            total += 1;
        }
    })
    return total;
}

// console.log(countNegatives(nums1), 1);
// console.log(countNegatives(nums2), 2);
// console.log(countNegatives(nums3), 0);
// console.log(countNegatives(nums4), 2);

// Create a function, createFirstNamesArray, that takes in an array of user objects and returns an array of first name strings. Assume that each user object has a property called 'firstName'.
//
//     Example...

var users = [
    {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob@email.com'
    },
    {
        firstName: 'Sally',
        lastName: 'Smith',
        email: 'sally@email.com'
    },
    {
        firstName: 'Fred',
        lastName: 'Smith',
        email: 'fred@email.com'
    },
    {
        firstName: 'Cathy',
        lastName: 'Smith',
        email: 'cathy@email.com'
    },
    {
        firstName: 'Joe',
        lastName: 'Smith',
        email: 'joe@email.com'
    },
];

// createFirstNamesArray(users); // returns... ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe']

function createFirstNamesArray(users){
    let firstNamesArray = [];

    users.forEach(function(user){
        firstNamesArray.push(user.firstName);
    })
    return firstNamesArray
}

// console.log(createFirstNamesArray(users), ['Bob', 'Sally', 'Fred', 'Cathy', 'Joe'])

// $("#change-color").click(function(){
//     $("#square").css("background", "lime");
// })
//
// $("#reset").click(function(){
//     window.location.reload();
// })

// $(".square").hover(function(){
//     $(this).css("background", ($(this).data("color")));
// }, function(){
//     $(this).css("background", "");
// })

// JQuery solution
$(".square").click(function() {
    $(this).toggleClass("yellow")
})

// vanilla js solution
const changingColors = document.querySelectorAll("#changingColors .square");

function toggleColor(e){
    e.target.style.backgroundColor === "" ? e.target.style.backgroundColor = "yellow" : e.target.style.backgroundColor = "";
}

changingColors.forEach(square => square.addEventListener("click", toggleColor));

// ================================= WARM UP
// Create a function, encodeStr, that takes in a string and returns the string of characters with the following substitutions:
// ‘a’ or ‘A’ becomes ‘@’
// ‘i’ or ‘I’ becomes ‘1’
// ‘s’ or ‘S’ becomse ‘$’
// encodeStr(‘apple’) // returns ‘@pple’
// encodeStr(‘codeup’) // returns ‘codeup’
// encodeStr(‘SASS’) // returns ‘$@$$’
// encodeStr(‘bike’) // returns ‘b1ke’

// first solution with the replaceAll method
// function encodeStr(str){
//     return str.replaceAll("a", "@")
//         .replaceAll("A", "@")
//         .replaceAll("i", "1")
//         .replaceAll("I", "1")
//         .replaceAll("s", "$")
//         .replaceAll("S", "$");
// }

// second solution with the map function
function encodeStr(str){
    return str.split("").map(char => {
        if (char.toLowerCase() === "a"){
            return "@";
        }
        else if (char.toLowerCase() === "i"){
            return "1";
        }
        else if (char.toLowerCase() === "s"){
            return "$";
        }
        else {
            return char;
        }
    }).join("")
}

// console.log(encodeStr("apple"), "@pple"); // returns ‘@pple’
// console.log(encodeStr("codeup"), "codeup"); // returns ‘codeup’
// console.log(encodeStr("SASS"), "$@$$"); // returns ‘$@$$’
// console.log(encodeStr("bike"), "b1ke"); // returns ‘b1ke’

// ================================= WARM UP
//
// Write a function, returnMostCommonVowel, that takes in a string and returns the most common vowel in the string.
// Assume the characters in the string are all lowercase and only 'a' 'e' 'i' 'o' 'u' count as vowels. Return the most common vowel from the string.
//
// If the highest vowel count is shared between multiple vowels, return the first vowel alphabetically. (2 'a's and 2 'e's should 'a')
//
// If no vowels are in the string return false.


function mostVowels(str){
    const vowels = [
        {
            vowel: "a",
            count: 0
        },
        {
            vowel: "e",
            count: 0
        },
        {
            vowel: "i",
            count: 0
        },
        {
            vowel: "o",
            count: 0
        },
        {
            vowel: "u",
            count: 0
        }
    ];

    const newStr = str.split("")

    newStr.forEach(function(char){
        if(char.toLowerCase() === "a"){
           return vowels[0].count++;
        } else if(char.toLowerCase() === "e"){
            return vowels[1].count++;
        } else if(char.toLowerCase() === "i"){
            return vowels[2].count++;
        } else if(char.toLowerCase() === "o"){
            return vowels[3].count++;
        } else if(char.toLowerCase() === "u"){
            return vowels[4].count++;
        }
    })

    let mostUsedVowel = vowels.sort((a, b) => b.count - a.count);

    if (mostUsedVowel[0].count === 0){
        return false;
    } else {
        return mostUsedVowel[0].vowel;
    }
}

console.log(mostVowels('codeup'), "e"); // returns 'e'
console.log(mostVowels('leetcode'), "e"); // returns 'e'
console.log(mostVowels('banana'), "a"); // returns 'a'
console.log(mostVowels('asdf'), "a"); // returns 'a'
console.log(mostVowels('nnnn'), false); // returns false
console.log(mostVowels('hello'), "e"); // returns 'e'
console.log(mostVowels('needful'), "e"); // returns 'e'