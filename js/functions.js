"use strict";

(function () {

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.*/

    /* Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */

    // function sayHello(name) {
    //     return "Hello " + name + "!";
    // }
    //
    // sayHello("Anthony");
    //
    // console.log(sayHello("Anthony"));

//------------------------------------------------------------------------------------
    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */

    // var helloMessage = sayHello("Anthony");
    //
    // console.log(helloMessage);

//------------------------------------------------------------------------------------
    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    // var myName = "Anthony San Miguel";
    //
    // console.log(sayHello(myName));

//------------------------------------------------------------------------------------
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.*/
    // function isTwo(number) {
    //     return number === 2;
    // }

    // isTwo(1);
    // console.log(isTwo(1));
    //
    // isTwo(2);
    // console.log(isTwo(2));
    //
    // isTwo(10);
    // console.log(isTwo(10));

    /* Example
    * > isTwo(1) // returns false
    * > isTwo(2) // returns true
    * > isTwo(3) // returns false */

    /** Call the function 'isTwo' passing the variable 'random' as a argument.
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)*/

    // isTwo(random);
    // console.log(isTwo(random));

//------------------------------------------------------------------------------------
    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip*/

     /* Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.37
     * > calculateTip(0.15, 33.42) // returns 5.013
     */

     function calculateTip(tipPercentage,billAmount) {
         return tipPercentage * billAmount;
     }
     // calculateTip();
     // console.log(calculateTip(0.20,20));
     // console.log(calculateTip(0.25,25.50));
     // console.log(calculateTip(0.15,33.42));
//------------------------------------------------------------------------------------
    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip*/

    // var billBeforeTip = parseFloat(prompt("What was your bill amount?"));
    // var tipPerc = parseFloat(prompt("What percentage would you like to tip? (.01 - 1)"));
    // alert("Thank you! Your tip amount should be: $" + calculateTip(billBeforeTip,tipPerc).toFixed(2));

//------------------------------------------------------------------------------------
    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.*/

     /* Example:
     * > var originalPrice = 100;
     * > var discountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */
    // var priceBeforeDiscount = prompt("What is the full price of the item selected?");
    // var discountPercentage = prompt("What is the % discount listed on your coupon? (.01 - 1)");
    // var alertMessage = "Thank you!" + " Your " + (discountPercentage * 100) + "% discount has been applied." +
    //     " Your final price is: $" + applyDiscount(priceBeforeDiscount,discountPercentage).toFixed(2);
    //
    // function applyDiscount(priceBeforeDiscount,discountPercentage) {
    //     return priceBeforeDiscount - (priceBeforeDiscount * discountPercentage);
    // }
    // alert(alertMessage);
})();
