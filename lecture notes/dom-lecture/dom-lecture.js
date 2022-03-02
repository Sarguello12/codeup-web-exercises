"use strict";

// let accessTheDom = document.getElementById("marvel");
// let showMe = accessTheDom.innerText;
// alert(showMe);

let like = document.getElementById("like");
let dontLike = document.getElementById("dontLike");
let marvel = document.getElementById("marvel");
let dc = document.getElementById("dc");

// adds additional text to the inner text of an element
marvel.innerText = marvel.innerText + ' rocks!';
dc.innerText += ' Animated Universe';

// adds a class attribute that can apply css elements
marvel.setAttribute("class", "hotpink");
dc.setAttribute("class", "hotpink");

// changes an elements color based on its place in the node list
let hotPinks = document.getElementsByClassName("hotpink");
// hotPinks[0].style.color = "hotpink";

// allows us to loop throw the node list and color every element within
for (let i = 0; i < hotPinks.length; i++){
    hotPinks[i].style.color = "hotpink";
}

// takes in input from the form and returns an alert containing whatever is inputted within the form
// loop allows form to take in the same input and change the color of p elements on the page
let submitButton = document.querySelector("#colorSubmission");
submitButton.onclick = function(){
    let colorInput = document.getElementById("colorPreference");
    let userInput = colorInput.value;
    // alert(userInput);
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = userInput;
    }
}


// using data attributes

let theHulk = document.getElementById("hulk");
let hulkState = theHulk.getAttribute("data-state");
// theHulk.innerText += " is in " + hulkState + " state";

// or

let hulkStrength = theHulk.dataset.strength;
// theHulk.innerText += ", his strength is " + hulkStrength;

let hulkIntelligence = theHulk.dataset.intelligence;
// theHulk.innerText += ", his intelligence is " + hulkIntelligence + "."

let transformHulk = document.getElementById("transformHulk");
transformHulk.onclick = function(){
    let hulk = document.getElementById("hulk");
    let hulkState = hulk.dataset.state;
    if (hulkState === "hulk"){
        hulk.dataset.state = "Bruce Banner";
    } else {
        hulk.dataset.state = "Hulk";
    }
    hulk.innerText = "The Hulk is in " + hulk.dataset.state + " state";
}