"use strict";

let groceryList = ['bread', 'eggs', 'butter', 'milk'];

console.log("I have to buy " + groceryList[0]);
console.log("My grocery list is " + groceryList);


let peoples = ['Jen', 'Mia', 'Eric', "Amy"];

console.log(peoples[0]);
console.log(peoples[3]);
console.log(peoples[1] + ' is my sister!');

for (let i = 0; i < peoples.length; i++) {
    console.log("Hello, " + peoples[i] + "!");
}

peoples.forEach(function(people) {
    console.log("Hello, " + people + "!");
});