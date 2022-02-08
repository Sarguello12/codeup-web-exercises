"use strict";

let groceryList = ['bread', 'eggs', 'butter', 'milk'];

console.log("I have to buy " + groceryList[0]);
console.log("My grocery list is " + groceryList);


let people = ['Jen', 'Mia', 'Eric', "Amy"];

console.log(people[0]);
console.log(people[3]);
console.log(people[1] + ' is my sister!');

for (let i = 0; i < people.length; i++) {
    console.log("Hello, " + people[i] + "!");
}

people.forEach(function(item) {
    console.log("Hello, " + item + "!");
});

let cities = ["San Antonio", "Austin", "Dallas", "Houston"];

for (let i = 0; i < cities.length; i++){
    console.log(cities[i]);
}

for (let i = 0; i < cities.length; i++){
    console.log("student " + (i + 1) + " lives in " + cities[i] + ".");
}