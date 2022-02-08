"use strict";

function showMultiplicationTable(num) {
    for(let i = 1; i <= 10; i++) {
        let multiplication = num * i;
        console.log(num + " x " + i + " = " + multiplication);
    }
}
showMultiplicationTable(2)


function tenRandomEvenOrOdd() {
    for(let i = 1; i <= 10; i++) {
        let randomNum = Math.floor(Math.random() * 181) + 20

        if(randomNum % 2 === 0) {
            console.log(randomNum + " is Even")
        } else {
            console.log(randomNum + " is Odd")
        }
    }
}
tenRandomEvenOrOdd();


function numberPyramid() {
    let output = "";
    for (let x = 1; x <= 9; x++) {
        for (let i = 1; i <= x; i++) {
            output += x;
        }
        console.log(output);
        output = "";
    }
}
numberPyramid();

// or much more simple solution

for(let i = "1"; i.length <= 9; i += "1") {
    console.log(i * i.length);
}


for(let i = 100; i >= 5; i-= 5){
        console.log(i);
}


