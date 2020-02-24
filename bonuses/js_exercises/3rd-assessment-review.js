"use strict";


//---------------WHEN IN DOUBT, CONSOLE LOG OUT!!! (e.g. each line of code)---------------


// #Loops, Arrays, & Objects

// Basic Review

// 1. What is an array in Javascript?

// An array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable.
//-----------------------------------------------------------------------------------
// 2. What is an object in Javascript?

// An object is an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively
//-----------------------------------------------------------------------------------
// 3. What is the difference between an array and an object?

// Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also mutable and can also be used to store a list of values.
//-----------------------------------------------------------------------------------
// 4. What is a property? A method?

// A JavaScript property is a characteristic of an object, often describing attributes associated with a data structure. There are two kinds of properties: Instance properties hold data that are specific to a given object instance. Static properties hold data that are shared among all object instances.

// A method is a function which is a property of an object. ... Note: In JavaScript functions themselves are objects, so, in that context, a method is actually an object reference to a function.
//-----------------------------------------------------------------------------------
// 5. Why are loops useful when dealing with arrays?

// Loops are used to perform same action multiple number of times till the condition which control the loop is true. Example: We use loops to access elements of array one after another, to store the values in array, or to perform some operations, or to display the values stored in array.
//-----------------------------------------------------------------------------------
// 6. What is an index?

// The index property is a read-only property. It contains the position of a regular expression match within a string.
//-----------------------------------------------------------------------------------
// 7. What is the difference between dot and bracket notation?

// The difference is in how x is interpreted. When using a dot, the part after the dot must be a valid variable name, and it directly names the property. When using square brackets, the expression between the brackets is evaluated to get the property name.

// Square bracket notation allows access to properties containing special characters and selection of properties using variables
//-----------------------------------------------------------------------------------

// ## Practice Problems
// 1.  Write a function, `filterNumbers()` that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
// filterNumbers(["fred", true, 5, 3]); //[3, 5]

//PSEUDO CODE:
// 1. Write a function called filterNumbers(inputArray)
// 2. Mixed data types include (string, boolean, number)
// 3. Return an array, therefore need an "empty bucket" variable...var bucket = [];
// 4. If an array is coming through as input, need to iterate through the array's individual items (e.g. therefore, "loop" through it)
// 5. Only return numbers, therefore, check each item to see if it's a Number..."typeof" x === "number"
// 6. If the item is a Number, push it to the empty bucket..."bucket.push(x)"
// 7. Return numbers in ascending order, thus, ".sort() method on bucket array"
// 8. Return the filled bucket variable with the filtered out numbers

// function filterNumbers(inputArray) {
//     var bucket = [];
//
//     inputArray.forEach(function (x) {
//         if (typeof x === "number") {
//             bucket.push(x);
//         }
//     });
//         return bucket.sort(function (a, b) {
//         return a - b;
//     });
// }
//
// console.log(filterNumbers(["fred", true, 5, 3]));

// 2. Write a function, `getOlder()` that takes in array of dog objects and increases the value of the age properties by 1.

// PSUEDO CODE:
// 1. Write a function called getOlder(dogs)
// 2. Since we are taking in an array, need a Loop to iterate through each dog, and increase age by 1. "dog.age = dog.age + 1"
// 3. return x

//     //Example input:
//
//        var dogList = [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 7
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 4
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 10
//          }
//      ];
//
// function getOlder(dogs){
//     dogs.forEach(function(dog){
//         dog.age = dog.age + 1;
//     });
//     return dogs;
// }
//
// console.log(getOlder(dogList));

// //Expected output:
//      [
//         {
//              name: "Chompers",
//              breed: "Pug",
//              age: 8
//          },
//          {
//              name: "Freddy",
//              breed: "Lab",
//              age: 5
//          },
//          {
//              name: "Mr. Pig",
//              breed: "Mastif",
//              age: 11
//          }
//      ];
//
// 3. Write a function, `washCars()` that takes in a array of car objects and sets the boolean properties of isDirty to false

// PSEUDO CODE:
// 1. Write a function called washCars(cars)
// 2. Since an array is being taken in, create a loop to loop through each car: car.isDirty = false;
// 3. Return cars

//             // Example input
//             var carList = [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: true
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: true
//                  }
//             ];
//
// function wasCars(cars){
//     cars.forEach(function (car){
//         car.isDirty = false;
//     });
//     return cars;
// }
//
// console.log(wasCars(carList));

//             // Expected output:
//              [
//                  {
//                      make: 'Volvo',
//                      color: 'red',
//                      year: 1996,
//                      isDirty: false // changed to false
//                  },
//                  {
//                      make: 'Toyota',
//                      color: 'black',
//                      year: 2004,
//                      isDirty: false // stays the same
//                  },
//                  {
//                      make: 'Ford',
//                      color: 'white',
//                      year: 2007,
//                      isDirty: false // changed to false
//                  }
//              ]
//
// 4. Write a function, `adminList()` that takes in an array of user objects and returns a count of all admins based on the isAdmin property.
//    Refactor to return an array of admin-only user emails.
//    Refactor again to return an array of user objects that are admins.

//          //Example Input:
//           var userList = [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              },
//              {
//                  isAdmin: false,
//                  email: 'user3@email.com'
//              }
//          ];

// PSEUDO CODE:
// PART 1 - COUNT (Note: if needing to keep track of a count, need to establish a variable that will act as the "counting bucket")

// 1. Write a function called adminList(users)
// 2. var adminCount = 0;
// 3. forEach user (for each User) --> user.isAdmin (if they are an admin, thus isAdmin is true) --> adminCount = adminCount + 1; (add 1 to counter)
// 4. Return adminCount

// function adminList(users){
//     var adminCount = 0;
//     users.forEach(function(user){
//         if(user.isAdmin){
//             adminCount = adminCount + 1;
//         }
//     });
//     return adminCount;
// }
//
// console.log(adminList(userList));
//----------------------------------------------------
// PSEUDO CODE:
// PART 2 - USER EMAILS
// Refactor to return an array of admin-only user emails.

// 1. Write a function called adminList(users)
// 2. var bucket = [];
// 3. forEach user (for each user) --> if user.isAdmin (if they are an admin) --> bucket.push(user.email) [push their email to the bucket]
// 4. return bucket

// function adminList(users){
//     var bucket = [];
//     users.forEach(function(user){
//         if(user.isAdmin){
//             bucket.push(user.email);
//         }
//     });
//     return bucket;
// }
//
// console.log(adminList(userList));
//----------------------------------------------------
// PSEUDO CODE:
// PART 3 - USER EMAILS
// Refactor again to return an array of user objects that are admins.

// 1. Write a function called adminList(users)
// 2. var bucket = [];
// 3. forEach user (for each user) --> if user.isAdmin (if they are an admin) --> bucket.push(user) [add all their information to the bucket, not just email]
// 4. return bucket

// function adminList(users){
//     var bucket = [];
//     users.forEach(function(user){
//         if(user.isAdmin){
//             bucket.push(user);
//         }
//     });
//     return bucket;
// }
//
// console.log(adminList(userList));

//  // Example Output (before refactor): 2
//
//
//         // Example Output (after 1st refactor):
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//
//         // Example Output (after 2nd refactor):
//         [
//              {
//                  isAdmin: true,
//                  email: 'user1@email.com'
//              },
//              {
//                  isAdmin: true,
//                  email: 'user2@email.com'
//              }
//          ]
//
// 5. Create a function, `makeSandwichObjects()` that takes in two array of strings, breads and fillings and returns an array of sandwichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

//         //     Example Input:

         // var breadList  = [
         //     "white",
         //     "wheat",
         //     "rhy",
         //     "white"
         // ];
         //
         // var fillingList = [
         //     "pb&j",
         //     "ham",
         //     "cheese steak",
         //     "tuna"
         // ];

// PSEUDO CODE:
// 1. Write a function named makeSandwichObjects(breads, fillings)
// 2. var bucket = [];
// 3. We have to loop through --> for(var i = 0; i < breads.length; i++)
// 4. Create sandwich object (e.g. sandwichObject)
// 5. bucket.push(sandwichObject)
// 6. return bucket

// function makeSandwichObjects(breads, fillings){
//     var bucket = [];
//     for(var i = 0; i < breads.length; i++){
//
//         var sandwichObject = {
//             bread: breads[i],
//             filling: fillings[i]
//         };
//
//         bucket.push(sandwichObject);
//     }
//     return bucket;
// }
//
// console.log(makeSandwichObjects(breadList,fillingList));

//          makeSandwichObjects(breads, fillings) // example call to the function
//
//         // Example Output:
//            [
//              {
//                  bread: "white",
//                  filling: "pb&j"
//              },
//              {
//                  bread: "wheat",
//                  filling: "ham"
//              },
//              {
//                  bread: "rhy",
//                  filling: "cheese steak"
//              },
//              {
//                  bread: "white",
//                  filling: "tuna"
//              }
//          ]

// 6. Write a function named keepYellow that accepts an array of strings and returns an array with all the strings that are equal to "yellow"
//    console.log(keepYellow(["yellow", "red", "blue", "yellow", "black", "brown", "yellow"]));

// var test = ["yellow", "red", "blue", "yellow", "black", "brown", "yellow"];

// PSEUDO CODE:
// 1. Create a defined function
// 2. Input must equal "yellow"
// 3. Place yellow strings in var bucket = [];
// 4. Return bucket

// function keepYellow(stringArray){
//     var bucket = [];
//     stringArray.forEach(function(color){
//         if(color === "yellow"){
//             bucket.push(color);
//         }
//     });
//     return bucket;
// }
//
// console.log(keepYellow(test));

// OR

// function keepYellow(stringArray) {
//     var bucket = [];
//     for (var i = 0; i < stringArray.length; i++) {
//         if (stringArray[i] === "yellow") {
//             bucket.push(stringArray[i]);
//         }
//     } return bucket;
// }
// console.log(keepYellow(test));
