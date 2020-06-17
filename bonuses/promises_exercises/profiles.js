"use strict";

//=================== Fetch Bonuses
//
//-- Ex. 1
//
//In your data directory, create a profiles.json file with the following...
//
//{
//"sandy123": "brown",
//"bob234": "green",
//"sally345": "blue"
//}
//
//Add an input field and submit button (you will need to prevent the default behaviour if inside a form element) that when clicked, runs the following function...

//Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.

// let nameAndColor = fetch("profiles.json") // Retrieve data from local json file
//     .then(response => { // After retrieval, take the data...
//         return response.json(); // ...and convert it into json format.
//     })
//     .then(jsonResponse => { // Then take that formatted data...
//         return console.log(jsonResponse); // and return it.
//     });

$("input[id='name']").change(function() {
    if($(this).val() === "sandy123") {
        $("body").css("background-color","brown");
    } else if($(this).val() === "bob234") {
        $("body").css("background-color","green");
    } else if($(this).val() === "sally345") {
        $("body").css("background-color","blue");
}
});

//-- Ex. 2
//
//Using the Star Wars API, log the first film a given Star Wars character's homeworld appeared in
//
//
//
//-- Ex. 3
//
//Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.
//
//
//
//-- Ex. 4
//
//Create star-chars.json file in your data folder and paste in the following...
//
//[
//{
//"name": "Rey",
//"coolness": 9
//},
//{
//"name": "Luke Skywalker",
//"coolness": 9
//},
//{
//"name": "Darth Vadar",
//"coolness": 10
//}
//]
//
//Create a function that fetches this array and returns an array of homeworlds for the characters.
//It will look something like the following...
//
//['Jakku', 'Tatooine', 'Tatooine']