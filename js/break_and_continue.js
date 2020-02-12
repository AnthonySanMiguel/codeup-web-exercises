"use strict";

// Break and Continue
//
//  Create a file named break_and_continue.js in the js directory.
// 	Prompt the user for an odd number between 1 and 50.
// 	Use a loop and a break statement to continue prompting the user if they enter invalid input.
// 	Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// 	Your output should look like this:

// Number to skip is: 27

// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

// MY SOLUTION: (in-progress)
// var userNumber = Number(prompt("Let's play a game...enter any ODD number between 1 - 50 below:"));
// console.log("Number to skip: " + userNumber);
//
// for (var i = 1; i < 50; i++) {
//     if(i === userNumber) {
//         console.log("Yikes! Skipping number: " + userNumber);
//     } else if(i % 2 !== 0) {
//         console.log("Here is an odd number: " + i);
//     }
// }

// INSTRUCTOR SOLUTION: (conditional approach)
// do {
//     var userNumber = Number(prompt("Please enter a number between 1 and 50."));
//     console.log("Number to skip: " + userNumber);
//
//     if(userNumber < 1 || userNumber > 50){ // If number entered is not between 1 and 50...
//         alert(userNumber + " is not between 1 and 50, please enter again.");
//     } else if(userNumber % 2 === 0){ // If number entered is even...
//         alert(userNumber + " is not odd. Please enter again.");
//     } else if(isNaN(userNumber)){ // If number entered is not a number...
//         alert(userNumber + " is not a number. Please enter again.");
//     } else {
//         alert("Congrats, you picked the right number!");
//         break; // Stops the loop from running if an odd number between 1 and 50 is entered...
//     }
//
// } while(true); // Entering boolean TRUE forces loop to run until a break statement is encountered.
//
//
// for(var i = 1; i <= 50; i++){
//     if(i % 2 === 0){
//         continue; // If number is EVEN, continue in loop and "skip" ahead (e.g. no console log).
//     }
//
//     if(i === userNumber){ // If number is ODD, execute code as follows...
//         console.log("Yikes! Skipping number: " + userNumber);
//     } else{
//         console.log("Here is an odd number: " + i);
//     }
// }

// INSTRUCTOR SOLUTION: (iterating by 2 each time loop is run)
// do {
//     var userNumber = Number(prompt("Please enter a number between 1 and 50."));
//     console.log("Number to skip: " + userNumber);
//
//     if(userNumber < 1 || userNumber > 50){ // If number entered is not between 1 and 50...
//         alert(userNumber + " is not between 1 and 50, please enter again.");
//     } else if(userNumber % 2 === 0){ // If number entered is even...
//         alert(userNumber + " is not odd. Please enter again.");
//     } else if(isNaN(userNumber)){ // If number entered is not a number...
//         alert(userNumber + " is not a number. Please enter again.");
//     } else {
//         alert("Congrats, you picked the right number!");
//         break; // Stops the loop from running if an odd number between 1 and 50 is entered...
//     }
//
// } while(true); // Entering boolean TRUE forces loop to run until a break statement is encountered.
//
// for(var i = 1; i <= 50; i++){
//     if(i === userNumber){ // If number is ODD, execute code as follows...
//         console.log("Yikes! Skipping number: " + userNumber);
//         continue;
//     }
//         console.log("Here is an odd number: " + i);
//     }
