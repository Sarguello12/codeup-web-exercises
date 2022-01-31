// console.log("Hello from external JS!");
// alert("Welcome to my website!");

const favColor = prompt("What is your favorite color?");
alert(favColor + " is my favorite color too!");


//exercise 3.4
itemsBought = Number(prompt("How many items are you purchasing?"));
const premiumMember = confirm("Are you a premium member?");

const offerExpired = false;

if (offerExpired === false && (itemsBought >= 2 || premiumMember === true)){
    alert("Product offer applied!");
} else {
    alert("Product offer is not valid.");
}


//exercise 3.3
const classSchedule = confirm("Is your class schedule full?");
const scheduleConflict = confirm("Does this class conflict with your current schedule?");

if (classSchedule === false && scheduleConflict === false){
    alert("You may register for this class!");
} else {
    alert("I am sorry we cannot let you register for this class.");
}


//exercise 3.2
const googleHours = Number(prompt("How many hours did you work for Google?"));
const googleRate = 400;
const googlePay = googleHours * googleRate;
//console.log(googlePay);

const amazonHours = Number(prompt("How many hours did you work for Amazon?"));
const amazonRate = 380;
const amazonPay = amazonHours * amazonRate;

const faceBookHours = Number(prompt("How many hours did you work for FaceBook?"));
const faceBookRate = 400;
const faceBookPay = faceBookHours * faceBookRate;

alert(googlePay + amazonPay + faceBookPay);


//exercise 3.1
const mermaidRental = Number(prompt("How many days did you rent the little mermaid?"));
const brotherBearRental = Number(prompt("How many days did you rent brother bear?"));
const herculesRental = Number(prompt("How many days did you rent hercules?"));

const movieRentalCost = (mermaidRental + brotherBearRental + herculesRental) * 3;
// console.log(movieRentalCost);
alert("Your total rental bill comes out to $" + movieRentalCost);