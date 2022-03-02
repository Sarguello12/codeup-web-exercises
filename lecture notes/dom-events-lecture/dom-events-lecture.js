"use strict";

// let button = document.querySelector("button");

function doThisWhenTheButtonIsClicked(){
    alert("You clicked me!");
}

// button.addEventListener("click", doThisWhenTheButtonIsClicked);
//
// let secondButton =document.getElementsByTagName("button")[1];
// secondButton.onclick = doThisWhenTheButtonIsClicked;

let allTheButtons = document.getElementsByTagName("button");
for (let i = 0; i < allTheButtons.length; i++){
    allTheButtons[i].addEventListener('click', doThisWhenTheButtonIsClicked)
}