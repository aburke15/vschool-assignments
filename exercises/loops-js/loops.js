var readline = require("readline-sync");
var input = "This is a string.";

function printChar() {
    for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}
printChar();

//===================================================

/*
Write a program that accepts a string as input. 
Then ask the user for a character. Write a loop that 
iterates over the string, and prints the position of 
the first occurrence of the specified character. If 
the character is not found, tell that to the user.
*/

var myString = "This is a string";
var guess = readline.question("Guess a letter: ");
var stillLooking = true;
for (var i = 0; i < myString.length; i++) {
    if (guess === myString[i]) {
        console.log(i);
        stillLooking = false;
        break;
    }
}

if (stillLooking) {
    console.log("Character not found.");
}

//====================================================


//do {
//    var userInput = readline.question("Enter a number: ");
//} while (parseInt(userInput) !== 42);
//console.log("You've hit the lucky number 42.");
//
//console.log(); 

while (parseInt(userInput) !== 42) {
    var userInput = readline.question("Enter a number: ");
}
console.log("You've hit the lucky number 42.");
//=====================================================


var integers = []; // delcares new empty array 

// getSmall function
// Purpose: to get ten numbers from user, convert to int and push to array, 
// will also locate the smallest number in array 
// Returns: smallest number in the array

for (var i = 0; i < 10; i++) {
    var smallNum = readline.question("Enter a number: ");
    integers.push(parseInt(smallNum));
}
return console.log("The smallest number is: " + Math.min.apply(Math, integers));


 //invokes the function so everything is executed

var input = readline.question("Type a character: ");  
//console.log(typeof(input)); 
var number = parseInt(input);
if (isNaN(number)) {
    console.log("Not a number");
} else {
    console.log("This is a number");
}