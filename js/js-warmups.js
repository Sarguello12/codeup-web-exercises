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
var nums1 = [1, 2, 3, 4, 5];
var nums2 = [2, 2, 3, 4, 5];
var nums3 = [10, 0, -5, 4, 5];
var nums4 = [2, 2, -5, 2, 2];
var nums5 = [2, 2, 2, 2, 2];

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




