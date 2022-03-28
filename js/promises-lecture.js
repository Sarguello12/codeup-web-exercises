"use strict";

// fetch("../data/rows.json").then(response => response.json()).then(info => console.log(info.data));

const ourFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("I am resolved");
        } else {
            reject("I was rejected");
        }
    }, 1000)
});

// ourFirstPromise.then(value => console.log(value)).catch(error => console.log(error));
// console.log(ourFirstPromise)

fetch("../data/rows.json").then(response => response.json()).then(info => console.log(info.data)).catch(error => console.log(error));

