"use strict";

// console.log("Hello from external JavaScript");

// External JS Exercise:

// alert("Welcome to my Website!");
// var userPrompt = prompt("What is your favorite color?");
// alert("Great, " + userPrompt + " is my favorite color too!");
// ----------------------------------------------------------------------------
// Question 1: Movie Rental
// //
// var rentalPrice = prompt("What is the nightly rental price per movie?");
// var littleMermaid = prompt("How many nights do you plan to rent 'The Little Mermaid'?");
// var brotherBear = prompt("How many nights do you plan to rent 'Brother Bear'?");
// var hercules = prompt("How many nights do you plan to rent 'Hercules'?");
// var totalCost = (littleMermaid*rentalPrice) + (brotherBear*rentalPrice) + (hercules*rentalPrice);
// alert("Thank you. Your total charge will be: $" + totalCost);
// ----------------------------------------------------------------------------
// Question 2: Contractor Payment

// var googleRatePerHour = prompt("What does Google pay you per hour of work?");
// var googleHoursWorked = prompt("How many hours did you work for Google this week?");
// var amazonRatePerHour = prompt("What does Amazon pay you per hour of work?");
// var amazonHoursWorked = prompt("How many hours did you work for Amazon this week?");
// var facebookRatePerHour = prompt("What does Facebook pay you per hour of work?");
// var facebookHoursWorked = prompt("How many hours did you work for Facebook this week?");
// var weeklyPayment = (googleRatePerHour*googleHoursWorked) + (amazonRatePerHour*amazonHoursWorked) + (facebookRatePerHour*facebookHoursWorked);
// alert("Thank you. Your total weekly paycheck is calculated to: $" + weeklyPayment);
// ----------------------------------------------------------------------------
// Question 3: Student Enrollment
//
// var classSize = confirm("Is there still seating available in your selected class?");
// var classTime = confirm("Does your selected class conflict with any other classes in your schedule?");
//
// function enrollmentCheck() {
//     if ((classSize === true) && (classTime === false)) {
//         alert("You have been enrolled. See you during class!");
//     }   else {
//         alert("Sorry, you are unable to enroll at this time. You have been placed on a waiting list.");
//     }
// }
// enrollmentCheck();
// ----------------------------------------------------------------------------
// Question 4: Product Offer
//
var premiumMember = confirm("Are you a Premium member?");
var numberOfItems = parseInt(prompt("How many items are in your cart?"));
var offerValidity = confirm("Is our promotion still available at your local store?");
var discountStatus = (premiumMember === true || numberOfItems > 2) && offerValidity === true;

var discountNotice = function discountVerificationFormula() {
        if (discountStatus === true) {
            return ("Your discount has been applied!");
    }   else {
            return("Sorry, this discount is no longer valid.");
    }
};
alert(discountNotice());
