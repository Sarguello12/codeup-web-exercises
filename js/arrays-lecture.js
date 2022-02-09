"use strict";

let groceryList = ['bread', 'eggs', 'butter', 'milk'];
//
// console.log("I have to buy " + groceryList[0]);
// console.log("My grocery list is " + groceryList);
//
//
// let people = ['Jen', 'Mia', 'Eric', "Amy"];
//
// console.log(people[0]);
// console.log(people[3]);
// console.log(people[1] + ' is my sister!');
//
// for (let i = 0; i < people.length; i++) {
//     console.log("Hello, " + people[i] + "!");
// }
//
// people.forEach(function(item) {
//     console.log("Hello, " + item + "!");
// });
//
// let cities = ["San Antonio", "Austin", "Dallas", "Houston"];
//
// for (let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
// }
//
// for (let i = 0; i < cities.length; i++){
//     console.log("student " + (i + 1) + " lives in " + cities[i] + ".");
// }

groceryList.push("coffee");
console.log(groceryList);

groceryList.pop();
console.log(groceryList);

groceryList.unshift("sparkling water");
console.log(groceryList);

groceryList.shift();
console.log(groceryList);

console.log(groceryList.indexOf("bread"));

let indexOfEggs = groceryList.indexOf("eggs");
console.log("The eggs are at index  " + indexOfEggs);

groceryList[0] = "sparkling water";
console.log(groceryList);


//slice must be stored in a variable as it returns a new array.
let firstHalfOfList = groceryList.slice(0, 2);
console.log(firstHalfOfList);

//by omitting the second input the new array ends at the end of the array.
let secondHalfOfList = groceryList.slice(2);
console.log(secondHalfOfList);

firstHalfOfList.push("plantain chips");
groceryList = firstHalfOfList.concat(secondHalfOfList);
console.log(groceryList);

groceryList.reverse();
console.log(groceryList);

groceryList.sort();
console.log(groceryList);