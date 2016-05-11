var ask = require("readline-sync"); 
// below are some test values 
// ask user for the phrase they want encrypted
var phrase = ask.question("What phrase would you like encrypted? ").toLowerCase(); 
// ask how many places they want to shift 
var shift = ask.question("How many places would you like to shift? "); 
// now figure out how to shift the letters
var alphabet = "abcdefghijklmnopqrstuvwxyz"; 

function shiftLetters(phrase, shift) {
    var shiftedString = ""; 
    // loop through each letter of phrase
    // find what index each letter in phrase is at in alphabet
    for (var i = 0; i < phrase.length; i++) {
        var letter = phrase[i]; 
        var index = alphabet.indexOf(letter); 
        if (index === -1) {
            shiftedString += letter; 
        } else {
            var newIndex = (index + shift) % 26; 
            shiftedString += alphabet[newIndex]; 
        }
    }
    // what if the character isn't found in the alphabet
    // add "shift" to the found index
    // new problem: what if index is great than 25
    // find the letter in the alpha at the new index 
    // push that new letter to a new string representing shift phrase
    return shiftedString; 
}

console.log(shiftLetters(phrase, shift)); 