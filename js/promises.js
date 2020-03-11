"use strict";

// function wait(input) {
//     return new Promise((resolve, reject) => {
//         if (input === 1000) { // If your input equals 1000...
//             setTimeout(() => { // ...then after 1 second (e.g. 1000 ms), you will receive the resolve/"success" message
//                 resolve("You'll see this after 1 second...your input equals 1000");
//             }, 1000); // 1000 ms = 1 second; timeout = delay, thus "after 1 second"
//         } else {
//             setTimeout(() => { // If your input does NOT equal 1000...
//                 resolve("You'll see this after 3 seconds...your input type does NOT equal 1000");// ...then after 3 seconds (e.g. 3000 ms), you will receive the resolve message
//             }, 3000); // 3000 ms = 3 seconds; timeout = delay, thus "after 3 seconds"
//         }
//     }) // FOR THIS SOLUTION THERE IS NO EXPLICITLY DEFINED "REJECT"/"FAIL" FUNCTION
// } // NOTE: THIS SOLUTION IS INCORRECT AS IT IS A CONDITIONAL, AND DOES -NOT- LOG BOTH MESSAGES IN THE CONSOLE (SEE INSTRUCTOR SOLUTION BELOW)
//
// const request = wait(3000); // When calling your function, you can enter the desired input to test (e.g. any number or input)
// console.log(request);
//
// request.then(success => console.log(success));
// request.catch(error => console.log(error));

// INSTRUCTOR SOLUTION:

// const wait = num => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, num);
//     });
// };
//
// wait(1000).then(() => console.log("You'll see this after 1 second."));
// wait(3000).then(() => console.log("You'll see this after 3 seconds."));

//-----------------------------------

// Generate a Personal Access Token for the GitHub API.

// We will use this so that we don't get rate limited when talking to the GitHub API.

// You can add the token to your requests like this:
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

// EXERCISE: Create a function that accepts a GitHub username, and returns a promise
// that resolves with the date of the last commit that user made.
// Reference the github api documentation to achieve this.

// HINT: To find the most recent commit, find the most recent public push event payload
// and use the first commit in the payload to find it's date.

fetch("https://cors-anywhere.herokuapp.com/https://api.github.com/users/AnthonySanMiguel/events", {headers: {"Authorization": gitHubKey}})
    .then(response => {
        return response.json();
    })
    .then(jsonResponse => {
        return console.log(new Date(jsonResponse[0].created_at));
    });
