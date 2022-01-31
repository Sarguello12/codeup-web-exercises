"use strict";

// alert("Hello world!");

// const userChoice = confirm("click OK!");

// console.log(userChoice);

// if (userChoice){
//     alert("Wise choice...");
// } else {
//     alert("WRONG!!")
// }

const currentSpeed = Number(prompt("How fast are you driving now?"));
// console.log(currentSpeed);

const plannedSpeedIncrease = Number(prompt("How much faster do you want to go?"));

const newSpeed = (currentSpeed + plannedSpeedIncrease);
// console.log("Your planned speed is " + newSpeed);

const distanceLeft = Number(prompt("How many miles are you from your destination?"));

const timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
const timePlannedSpeed = (distanceLeft/newSpeed) * 60;
const timeGain = (timeAtCurrentSpeed - timePlannedSpeed);

alert("If you drive at " + newSpeed + " mph, you will arrive " + timeGain.toFixed(2) + " minutes sooner!");