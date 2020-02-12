"use strict";
// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

// For example, showMultiplicationTable(7) should output.

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// function showMultiplicationTable() {
//
//     var randomNumber = Math.floor(Math.random() * 12) + 1; //Generates a random number between 1 - 12.
//
//     for (var i = 1; i <= 10; i++) { //Start multiplication at "1"; go up to x10; and until x10, increase by 1 (e.g. x2).
//         var result = randomNumber * i;
//         console.log(randomNumber + ' x ' + i + ' = ' + result);
//     }
// }
// showMultiplicationTable();

//------------------------------------------------

// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
//     ...

// for (var i = 0; i < 5; i++) {
//
//     var randomNumber = Math.floor(Math.random() * 200) + 20;
//
//         if (randomNumber % 2 === 0) {
//             console.log(randomNumber + " is even.");
//         } else {
//             console.log(randomNumber + " is odd.");
//         }
// }

//------------------------------------------------

// 4. Create a for loop that uses console.log to create the output shown below.

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for(var i = 0; i <= 999999999; i++) {
// 		if(i === Number(1)) {
// 			console.log(i);
// 		} else if(i === Number(22)) {
// 			console.log(i);
// 		} else if(i === Number(333)) {
// 			console.log(i);
// 		} else if(i === Number(4444)) {
// 			console.log(i);
// 		} else if(i === Number(55555)) {
// 			console.log(i);
// 		} else if(i === Number(666666)) {
// 			console.log(i);
// 		} else if(i === Number(7777777)) {
// 			console.log(i);
// 		} else if(i === Number(88888888)) {
// 			console.log(i);
// 		} else if(i === Number(999999999)) {
// 			console.log(i);
// 		}
// }
//------------------------------------------------

// 5. Create a for loop that uses console.log to create the output shown below.

// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// for(var i = 100; i >= 5; i--) {
//     if(i % 5 === 0) {
//     console.log(i);
//     }
// }
