// (function() {

    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Anthony",
    //     lastName: "San Miguel"
    // };
    //
    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function(){
    //     return "Hello " + person.firstName + " " + person.lastName + "!";
    // };
    // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

//     var shoppers = [
//         {name: 'Cameron', amount: 180},
//         {name: 'Ryan', amount: 250},
//         {name: 'George', amount: 320}
//     ];
//
//     // shoppers.forEach(function(shopper) {
//     //     console.log(shoppers[0].name + " bought $" + shoppers[0].amount + " of groceries and received a 12% discount! His initial bill of $" + shoppers[0].amount + " has been reduced to $" + (shoppers[0].amount - (shoppers[0].amount * .12).toFixed(2)));
//     // });
//
//     shoppers.forEach(function(x){
//         if(x.amount > 200){
//             console.log("Congratulations! " + x.name + "'s initial bill of $" + x.amount + " has been reduced by 12%! His new total is " + (x.amount - (x.amount * .12)).toFixed(2));
//         } else{
//             console.log("Sorry! " + x.name + " is not eligible for a discount with a total of $" + x.amount);
//         }
// });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

//     var books = [
//         {
//             title: "'Blade Runner'",
//             author: {
//                 firstName: "Phillip",
//                 lastName: "Dick"
//             }
//         },
//         {
//             title: "'It'",
//             author: {
//                 firstName: "Stephen",
//                 lastName: "King"
//             }
//         },
//         {
//             title: "'Neuromancer'",
//             author: {
//                 firstName: "William",
//                 lastName: "Gibson"
//             }
//         },
//         {
//             title: "'Low Level Hell'",
//             author: {
//                 firstName: "Hugh",
//                 lastName: "Mills, Jr."
//             }
//         },
//         {
//             title: "'We Were Soldiers Once...and Young'",
//             author: {
//                 firstName: "Harold",
//                 lastName: "Moore (Ret.)"
//             }
//         }
// ];

// console.log(books[0].title);
// console.log(books[0].author.firstName);
// console.log(books[0].author.lastName);

// console.log(books[1].title);
// console.log(books[1].author.firstName);
// console.log(books[1].author.lastName);

// console.log(books[2].title);
// console.log(books[2].author.firstName);
// console.log(books[2].author.lastName);

// console.log(books[3].title);
// console.log(books[3].author.firstName);
// console.log(books[3].author.lastName);

// console.log(books[4].title);
// console.log(books[4].author.firstName);
// console.log(books[4].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

        // var i = 1;
        // books.forEach(function(book) {
        //     console.log("Book # " + i + "\n" + "Title:" + book.title + "\n" + "Author: " + book.author.firstName + " " + book.author.lastName);
        //     i++;
        // });

            /**
             * Bonus:
             * - Create a function named `createBook` that accepts a title and author
             *   name and returns a book object with the properties described
             *   previously. Refactor your code that creates the books array to instead
             *   use your function.
             * - Create a function named `showBookInfo` that accepts a book object and
             *   outputs the information described above. Refactor your loop to use your
             *   `showBookInfo` function.
             */


// })();
