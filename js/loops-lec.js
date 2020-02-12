"use strict";
// console.log("Hello from Loops JS");

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
//
// console.log(90);
// console.log(91);
// console.log(92);
// console.log(93);
// console.log(94);
// console.log(95);
// console.log(96);
// console.log(97);
// console.log(98);
// console.log(99);
// console.log(100);
// Rather than manually add 1 and console log each result, create a loop for this repetitious action


/*********************************************
 *                   WHILE LOOPS
 *********************************************/
// A while loop will run WHILE a certain condition is true
// while (condition) {
//  code runs.
// }

//TODO TOGETHER: Create a while loop that counts up to 10 (non-inclusive) by 1
// (0, 1, 2...9); "Non-inclusive means do NOT include the last value (e.g. do not include 10)";

// var i = 0;
//
// while(i < 10){ // Want loop to run while "i" is less than 10...can also write while i <= 9 for this problem.
//     console.log(i); //Console log i
//     i++; //Add 1 to i every loop iteration
// }

//TODO TOGETHER: Create a while loop that counts down from 20 to 0 (inclusive) by 1
// (20, 19, 18...0); "Inclusive means DO include the last value (e.g. include 0)";

// var i = 20;
//
// while(i >= 0){
//     console.log(i);
//     i--;
// }

//TODO TOGETHER: Create a while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

// var i = 0;
//
// while(i <= 20){
//     console.log(i);
//     i = i + 2; // or i+=2 "shorthand"
// }

//TODO: Create a while loop that counts to 100 (inclusive) in increments of ten:
// (10...20...30...)

// var i = 0;
//
// while(i <= 100){
//     console.log(i);
//     i = i + 10;
// }

//TODO: Create a while loop that counts down from 50 to 1 (inclusive) in increments of 1:
// (50, 49, 48, 47, 46 .... 1)

// var i = 50;
//
// while(i >= 1) {
//     console.log(i);
//     i--;
// }

/*********************************************
 *               DO-WHILE LOOPS
 *********************************************/
// A do/while loop will run at least once.

// do {
//  Code to be run.
// } while (condition)


// var i = 10;
//
// while (i < 10) {
// 	console.log('while loop iteration #' + i); //This WHILE loop will never run, since the loop "starts" by looking at the variable value, which already equals 10.
// 	i++;
// }


// TODO TOGETHER: Why doesnt the example above run?


// TODO TOGETHER: Refactor the example above using a do-while loop. What behavior do we notice?

// var i = 10;
//
// do{
// 	console.log(i);
// 	i++;
// } while (i < 10); //This DO-WHILE loop will run, but display only console log of 10, since i already equals 10.

//TODO TOGETHER: Create a do-while loop that asks the user to confirm: "Would you like to exit?" What difference do you notice?

// do{
// 	var userConfirm = confirm("Would you like to exit?")
// 	console.log(userConfirm) // Console log value to see what user selected
// } 	while(!userConfirm); //We want the confirm to keep coming up if the user selects "Cancel" or "No" (thus the opposite of True (e.g. !NOT true)

//TODO TOGETHER: Create a do-while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

// var i = 0;
//
// do{
// 	console.log(i);
// 	i = i + 2;
// }while(i <=20); // Want the loop to stop once i equals 20

//TODO: Create a do-while loop that prompts the user for a color and continues to prompt until the string passed is "blue"; NOTE: MAKE SURE YOUR "PROMPT" variable is nested -WITHIN- the DO-WHILE loop!!! (see below).

// do{
// 	var userColor = prompt("Please enter a color below:").toLowerCase(); //Ensure text entered is converted to lowercase
// 	console.log(userColor);
// }while(userColor !== "blue"); // Keep running prompt until userColor does NOT equal desired variable, "blue"

/*********************************************
 *               FOR LOOPS
 *********************************************/
// For loops: Loops that are designed to run a given number of times.

// for (/*initialization*/; /*condition*/; /*increment*/) {
// 	// body
// }

//TODO TOGETHER: Explore basic for loop syntax

// for(var i = 0; i < 10; i++){
// 	console.log(i);
// }

// TODO TOGETHER: Write a for loop that loops through numbers 0 - 5 (inclusive);

// for (var i = 0; i <= 5; i++) {
// 	console.log(i);
// }

// TODO TOGETHER: Why are loops beneficial?

//Loops automate simple actions; are dynamic

// TODO TOGETHER: Console.log each color from the array randomColors

//  var randomColors = ["red","orange","yellow","blue","green"];

 // console.log(randomColors[0]); // red // "red" is index position "0" in the array...
 // console.log(randomColors[1]); // orange
 // console.log(randomColors[2]); // yellow
 // console.log(randomColors[3]); // blue
 // console.log(randomColors[4]); // green

// for(var i = 0; i < randomColors.length; i++){
//    console.log("Current iteration: " + i + " (e.g. array index value)");
//    console.log(randomColors[i]);
// }

// TODO TOGETHER: Using a for loop, log all even numbers 0 - 100;

// for(var i = 0; i <= 100; i++) {
// 	if(i % 2 === 0) {
// 		console.log(i); //If "i" is evenly divisible by 2 (e.g. Even), log it! (at least until 100)
// 	}
// }

// for(var i = 0; i <= 100; i = i + 2){
// 	console.log(i); //Alternatively, can create a FOR-LOOP that just incrementally adds "2" to "i" until it reaches 100
// }

// TODO: Using a for loop, log all numbers divisible by 5, from 0 - 100;

// for(var i = 0; i <= 100; i++){
// 	if(i % 5 === 0){
// 		console.log(i);
// 	}
// }

// TODO: Using a for loop, complete the FizzBuzz challenge:
//  Your program should count up to 100.
//  For numbers divisible by 3, log "Fizz"
//  For numbers divisible by 5, log "Buzz"
//  If divisible by 3 and 5, log "FizzBuzz" // aka % 15 (!)
//  All other cases, just log the number.

// for (var i = 0; i <= 100; i++) {
// 	if (i % 15 === 0) { //IMPORTANT!: THE ORDER MATTERS (e.g. % 15 FIRST, OTHERWISE "15" WILL BE LABELED AS "FIZZ" (e.g. if % 3 = "Fizz" is the first condition)...remember ORDER OF OPERATIONS/HIERARCHY OF PRECEDENCE!!!
// 		console.log("FizzBuzz");
// 	} else if (i % 3 === 0) {
// 		console.log("Fizz");
// 	} else if (i % 5 === 0) {
// 		console.log("Buzz");
// 	} else {
// 		console.log(i);
// 	}
// }

/*********************************************
 *              BREAKS & CONTINUES
 *********************************************/
// We can get a loop to stop using break;

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
// 	console.log('Loop counter is: ' + i);
//
// 	if (i === numberToStopAt) {
// 		console.log('We have reached the stopping point: break!');
// 		// use the break keyword to exit from the while loop
// 		break; //<-- THIS COMMAND STOPS THE LOOP FROM RUNNING FURTHER, DESPITE CONDITION ABOVE (e.g.. If "i" less than 100, keep adding 1)
// 		// nothing after the break will get processed
// 		console.log('You will never see this line.');
// 	}
// }


// We can get an iteration to skip using continue;
// for (var i = 1; i < 100; i++) {
//
// 	if (i % 2 !== 0) {
// 		// skipping all Odd numbers;
// 		continue;
}
//
// 	console.log('Here is a lovely even number: ' + i); // Will only display Even numbers, since Odds are skipped (e.g. if Odd, "continue" to log Even with message)
// }
