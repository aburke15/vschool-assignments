var ask = require("readline-sync"); 
console.log("Hello, my name is Andre. Help me to get to know you.");
var fisrtName = ask.question("What is your first name? "); 
var lastName = ask.question("and your last name? "); 
console.log("Cool, nice to meet you " + fisrtName.toUpperCase()); 
console.log(); 
var userAge = ask.question("I am 23 years old. What's your age? "); 
console.log(); 
console.log("Awesome. So far, I know that your name is " + fisrtName + " " + lastName + " and you're " + userAge + " years old."); 
console.log(); 
var background = ask.question("Give me a short background about you and I'll repeat back what I remember: ");
var stringLength = background.length; 
console.log("So, the info you gave me is " + stringLength + " characters long.");
console.log("This was the last half: "); 
// check back to see if there is a better way to code this
var halfString = Math.floor(stringLength / 2); 
var sliceString = background.slice(halfString, stringLength); 
console.log(sliceString); 
// 
var newStart = ask.question("Would you like me to start from somewhere else in your info? Choose a number in the range of 0 - " + stringLength + ": "); 
console.log("Here ya go:"); 
var stringStart = background.slice(newStart, stringLength); 
console.log(stringStart); 
