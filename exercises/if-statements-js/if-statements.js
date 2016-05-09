var firstNumber = 23; 
var secondNumber = 25; 
function numberCheck() { 
    if (firstNumber === secondNumber) {
        return console.log("The numbers are the same!"); 
    } else if (firstNumber < secondNumber) {
        return console.log("The smaller number is: " + firstNumber);
    } else {
        return console.log("The smaller number is: " + secondNumber); 
    }
}

console.log(); 
console.log("The first number is: " + firstNumber); 
console.log("The second number is: " + secondNumber); 
console.log(); 
numberCheck(); 
console.log(); 

function monkeyTrouble(asmile, bsmile) {
    if (asmile === true && bsmile === true) {
        console.log("Both monkey's are smiling we're in trouble."); 
    } else if (asmile === false && bsmile === false) {
        console.log("Neither monkey is smiling we're in trouble."); 
    } else {
        console.log("One monkey is smiling the other isn't we're okay.")
    }
}

monkeyTrouble(true, true); // → true  
console.log();
monkeyTrouble(false, false); // → true
console.log();
monkeyTrouble(true, false); // → false
console.log();

var newDate = new Date(); 
var theHour = newDate.getHours(); 

function displayGreeting() {
    if (theHour < 12) {
        console.log("Good morning today is " + newDate); 
    } else if (theHour >= 12 && theHour <= 17) {
        console.log("Good afternoon today is " + newDate);
    } else {
        console.log("Good evening today is " + newDate); 
    }
}

displayGreeting(); 
console.log(); 