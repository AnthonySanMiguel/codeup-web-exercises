"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they would like to enter a number.
 * If they click 'Ok', prompt the user for a number, then use 3 separate alerts to tell the user:

 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive

 * if what the user enters is not a number, use an alert to tell them that, and do *not* display any of the above information.

 * Can you refactor your code to use functions?
 */

// var numberQuestion = confirm("Hello! Would you like to enter a number for testing?");
// var numberInput = Number(prompt("Please enter a number in the space below: "));
// //
// // //Is the Number Even or Odd?
//
// var evenOddNumber = function evenOddCalculator(numberInput) {
//     if (numberInput % 2 === 0) {
//         return numberInput + " is an even number.";
//     } else {
//         return numberInput + " is an odd number.";
//     }
// };
// alert(evenOddNumber(numberInput));
//
//
// // What is the Number, plus 100?
//
// var numberPlus100 = function add100(numberInput) {
//     return numberInput + " + 100 = " + (numberInput + 100);
// };
// alert(numberPlus100(numberInput));
//
//
// //Is the number negative or positive?
//
// var positiveOrNegative = function posOrNeg(numberInput) {
//     if (numberInput >= 0) {
//         return numberInput + " is positive.";
//     } else {
//         return numberInput + " is negative.";
//     }
// };
// alert(positiveOrNegative(numberInput));

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color name as input.
 * This function should return a message that related to that color.
 * Only worry about the colors defined below, if the color passed is not one of the ones defined below, return a
   message that says so

 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"

 * You should use an if-else-if-else block to return different messages.

 * Test your function by passing various string literals to it and
 * console.logging the function's return value*/

// var userColorSelection = prompt("Please enter a color in the space below:");
//
// function analyzeColor(anyColor) {
//
//     if (userColorSelection === "blue") {
//         alert("That's my favorite color!");
//     } else {
//
//         if (userColorSelection === "red") {
//             alert("A color that conveys strong emotion.");
//         } else {
//
//             if (userColorSelection === "cyan") {
//                 alert("Don't forget to check the yellow and magenta levels!");
//             } else {
//
//                 if (userColorSelection !== "blue" || "red" || "cyan") {
//                     alert("Try selecting one of the following colors: 'blue', 'red', or 'cyan'.");
//                 } else {
//                 }
//             }
//         }
//     }
// }
// analyzeColor(userColorSelection);

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
// will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page*/

// function colorSelector(randomColor) {
//
//     if (randomColor === "blue") {
//         alert("That's my favorite color!");
//     } else if (randomColor === "red"){
//         alert("A color that conveys strong emotion.");
//     } else{
//         alert("One of the many colors of the rainbow.");
//     }
// }

// colorSelector(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement*/

// var color = randomColor;
// switch(color) {
//     case "blue":
//         alert("That's my favorite color!");
//     break;
//
//     case "red":
//         alert("A color that conveys strong emotion.");
//     break;
//
//     default:
//         alert("One of the many colors of the rainbow.");
//     break;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.*/

// var userColorSelection = prompt("Please enter a color in the space below:");
//
// function analyzeColor(anyColor) {
//
//     if (userColorSelection === "blue") {
//         alert(userColorSelection.charAt(0).toUpperCase() + userColorSelection.slice(1) + " is my my favorite color!");
//     } else {
//
//         if (userColorSelection === "red") {
//             alert(userColorSelection.charAt(0).toUpperCase() + userColorSelection.slice(1) + " conveys strong emotion.");
//         } else {
//
//             if (userColorSelection === "cyan") {
//                 alert(userColorSelection.charAt(0).toUpperCase() + userColorSelection.slice(1) + "...and on that note, don't forget to check the yellow and magenta levels!");
//             } else {
//
//                 if (userColorSelection !== "blue" || "red" || "cyan") {
//                     alert("Good choice! Now try entering one of the following colors: 'blue', 'red', or 'cyan'.");
//                 } else {
//                 }
//             }
//         }
//     }
// }
// analyzeColor(userColorSelection);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.

 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.

 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0

 * Test your function by passing it various values and checking for the expected
 * return value.*/
// 1 is 10%
// 2 is 25%
// 3 is 35%
// 4 is 50%
// 5 is FREE

// var billTotal = Number(prompt("Thank you for shopping with us. Enter your bill amount below and see if you're a winner in our 'LUCKY NUMBER = LUCKY CUSTOMER' promotion!"));
// var luckyNumber = Number(Math.floor(Math.random() * 6));
//
// function calculateTotal(luckyNumber, billTotal) {
//     } if (luckyNumber === 1) {
//         alert("Congratulations! You have been randomly selected for a 10% discount! Your final bill is: $" +
//             Number(billTotal - ((billTotal * .10).toFixed(2))));
//     } else if (luckyNumber === 2) {
//         alert("Congratulations! You have been randomly selected for a 25% discount! Your final bill is: $" +
//             Number(billTotal - ((billTotal * .25).toFixed(2))));
//     } else if (luckyNumber === 3) {
//         alert("Congratulations! You have been randomly selected for a 35% discount! Your final bill is: $" +
//             Number(billTotal - ((billTotal * .35).toFixed(2))));
//     } else if (luckyNumber === 4) {
//         alert("Congratulations! You have been randomly selected for a 50% discount! Your final bill is: $" +
//             Number(billTotal - ((billTotal * .50).toFixed(2))));
//     } else if (luckyNumber === 5) {
//         alert("Congratulations! Your bill has been randomly selected to be on us! Your total is: $" +
//             Number((0).toFixed(2)));
//     } else {
//         alert("Sorry! You did not win a discount today. Your final bill is: $" +
//             Number((billTotal).toFixed(2)));
// }
// calculateTotal();

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.*/
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

// var billTotal = Number(prompt("Thank you for shopping with us. Enter your bill amount below and see if you're a winner in our 'LUCKY NUMBER = LUCKY CUSTOMER' promotion!"));
// var luckyNumber = Math.floor(Math.random() * 6);
//
// function calculateTotal() {
// } if (luckyNumber === 1) {
//     alert("Congratulations! You drew lucky number (" + luckyNumber + ") which provides a 10% discount! " +
//         "Your initial purchase of: $" + billTotal + " has been reduced to: $" +
//         (billTotal - ((billTotal * .1))) * 100 / 100).toFixed(2);
//
// } else if (luckyNumber === 2) {
//     alert("Congratulations! You drew lucky number (" + luckyNumber + ") which provides a 25% discount! " +
//         "Your initial purchase of: $" + billTotal + " has been reduced to: $" +
//         (billTotal - ((billTotal * .25))) * 100 / 100).toFixed(2);
//
// } else if (luckyNumber === 3) {
//     alert("Congratulations! You drew lucky number (" + luckyNumber + ") which provides a 35% discount! " +
//         "Your initial purchase of: $" + billTotal + " has been reduced to: $" +
//         (billTotal - ((billTotal * .35))) * 100 / 100).toFixed(2);
//
// } else if (luckyNumber === 4) {
//     alert("Congratulations! You drew lucky number (" + luckyNumber + ") which provides a 50% discount! " +
//         "Your initial purchase of: $" + billTotal + " has been reduced to: $" +
//         (billTotal - ((billTotal * .50))) * 100 / 100).toFixed(2);
//
// } else if (luckyNumber === 5) {
//     alert("Congratulations! You drew lucky number (" + luckyNumber + ") which covers your bill today! " +
//         "Your purchase of: $" + billTotal + " is  *** FREE! ***");
//
// } else {
//     alert("Sorry! You drew number (" + luckyNumber + ") which does not provide a discount. " +
//         "Your total today is: $" + billTotal);
// }
// calculateTotal();
