"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// PROBLEM: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let atLeastThreeLanguages = users.filter(function(user){
   return user.languages.length >= 3;
});

// console.log(atLeastThreeLanguages); // Returns all user objects that know at least 3 languages

// INSTRUCTOR SOLUTION:

// let skilledProfs = users.filter(user => user.languages.length >= 3);
// console.log(skilledProfs);

//------------------------------------

// PROBLEM: Use .map to create an array of strings where each element is a user's email address

let justEmails = users.map(function(user){
   return user.email;
});

// console.log(justEmails); // Returns all emails from user objects as an array of strings

// INSTRUCTOR SOLUTION:
// let emailAddies = users.map(user => user.email);
// console.log(emailAddies);

//------------------------------------

// PROBLEM: Use .reduce to get the total years of experience from the list of users.
// PROBLEM: Once you get the total of years you can use the result to calculate the average.

let totalExperience = users.reduce(function(total, user){
    return total + user.yearsOfExperience;
}, 0);

// console.log(totalExperience); // Logs total years of experience for users object
// console.log(totalExperience / users.length); // Logs the average years of experience for the users object (total experience / number of users)

// INSTRUCTOR SOLUTION:
// let totalExpYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
// console.log("Average years of experience: ");
// console.log(totalExpYears/users.length + ' years');

//------------------------------------

// PROBLEM: Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((mostCharacters, eachEmail) => {
    if (eachEmail.email.length > mostCharacters.length) {
        return eachEmail.email;
    } else {
        return mostCharacters
    }
}, "b");

// console.log(longestEmail);

// INSTRUCTOR SOLUTION:
// let longestEm = users.reduce((currentLongest, user) => user.email.length > currentLongest.length ? user.email : currentLongest,'j');
// console.log(longestEm);
//------------------------------------

// PROBLEM: Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.

let justNames = users.map(function(user){
    return user.name;
});

// console.log(("Your instructors are: " + justNames).toString());

// INSTRUCTOR SOLUTION:
// let names = users.reduce((sentence, user) => sentence === '' ? user.name : sentence + ', ' + user.name,'');
// console.log("Your instructors are: " + names + '.');
//------------------------------------

// PROBLEM: Use .reduce to get the unique list of languages from the list of users.


