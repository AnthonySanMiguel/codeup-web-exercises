"use strict";

// Create a function that takes a string as a parameter and returns the string, reversed

    function reverseString(str) {
        // Step 1. Use the split() method to return a new array
        let splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]

        // Step 2. Use the reverse() method to reverse the new created array
        let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]

        // Step 3. Use the join() method to join all elements of the array into a string
        let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"

        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }

    function originalString(str) {
        return str;
    }

    console.log(originalString("hello") + " reversed is: " + reverseString("hello"));

    // --------------------------------------------------

// Make a Function that accepts a parameter, and is able to count from 0 to specified parameter

    function countUp(number){
        for(let i = 0; i <= number; i++){
            console.log(i)
        }
    }

    countUp(7);

// --------------------------------------------------

// Using JavaScript write a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number, and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

        for(let i = 1; i <= 100; i++) {
            if (i % 15 === 0) {
                console.log("FizzBuzz");
            }
            else if (i % 3 === 0) {
                console.log("Fizz");
            }
            else if(i % 5 === 0){
                console.log("Buzz");
            }
            else{
                console.log(i);
            }
        }

// --------------------------------------------------

// Create a function called generateCoins that takes a float that represents change due, the function should return the minimal number of coins to be able to meet the specified change amount.

function generateCoins(change){
    let numberOfCoins = 0;

    while(change > 0){
        if(change >= 0.25){
            change = (change * 100 - 0.25 * 100) / 100;
            numberOfCoins++;
            continue;
        }else if(change >= 0.1){
            change = (change * 100 - 0.10 * 100) / 100;
            numberOfCoins++;
            continue;
        }else if(change >= 0.05){
            change = (change * 100 - 0.05 * 100) / 100;
            numberOfCoins++;
            continue;
        }else if(change >= 0.01){
            change = (change * 100 - 0.01 * 100) / 100;
            numberOfCoins++;
            continue;
        }
    }
    return numberOfCoins;
}

    function changeAmount(change) {
        return change;
    }

    console.log("For $" + changeAmount(0.71) + " in change, a minimum of " + generateCoins(0.71) + " coins are needed.");

// --------------------------------------------------

// Write a function in JavaScript that when called will console log from 0 to 35.

    function countToThirtyFive() {
        for (let i = 0; i <= 35; i++) {
            console.log(i);
        }
    }
    countToThirtyFive();
