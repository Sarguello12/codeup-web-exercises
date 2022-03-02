"use strict";

let button = document.querySelector("button");

function doThisWhenTheButtonIsClicked(){
    alert("You clicked me!");
}

button.addEventListener("click", doThisWhenTheButtonIsClicked);