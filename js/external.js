// console.log("Hello from external JS!");
// alert("Welcome to my website!");

const favColor = prompt("What is your favorite color?");
alert(favColor + " is my favorite color too!");


//exercise 3.3
itemsBought = Number(prompt("How many items are you purchasing?"));
const premiumMember = confirm("Are you a premium member?");

const offerExpired = false;

if (offerExpired === false && (itemsBought >= 2 || premiumMember === true)){
    alert("Product offer applied!");
} else {
    alert("Product offer is not valid.");
}


//exercise 3.2
const classSchedule = confirm("Is your class schedule full?");
const scheduleConflict = confirm("Does this class conflict with your current schedule?");

if (classSchedule === false && scheduleConflict === false){
    alert("You may register for this class!");
} else {
    alert("I am sorry we cannot let you register for this class.");
}


//exercise 3.1
const googleHours = Number(prompt("How many hours did you work for Google?"));
const googleDollarRate = 400;
const googlePay = googleHours * googleDollarRate;
//console.log(googlePay);

const amazonHours = Number(prompt("How many hours did you work for Amazon?"));
const amazonDollarRate = 380;
const amazonPay = amazonHours * amazonDollarRate;

const faceBookHours = Number(prompt("How many hours did you work for FaceBook?"));
const faceBookDollarRate = 350;
const faceBookPay = faceBookHours * faceBookDollarRate;

alert("Your total paycheck comes out to $" + (googlePay + amazonPay + faceBookPay));


//exercise 3.0
const mermaidRental = Number(prompt("How many days did you rent the little mermaid?"));
const brotherBearRental = Number(prompt("How many days did you rent brother bear?"));
const herculesRental = Number(prompt("How many days did you rent hercules?"));

const dollarPerDay = 3;

const totalMovieRentalCost = (mermaidRental + brotherBearRental + herculesRental) * dollarPerDay;
// console.log(movieRentalCost);
alert("Your total rental bill comes out to $" + totalMovieRentalCost);