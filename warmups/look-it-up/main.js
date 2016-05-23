var ask = require("readline-sync");
var dictionary = {};
var dictionaryRunning = true;

function newWord(word, definition) {
    dictionary[word] = definition;
}

function getWord() {
    var word = ask.question("What's the word?  ");
    var definition = ask.question("What's the definition for " + word + "?  ");
    newWord(word, definition);
    search(word, definition);
}

function search(word, definition) {

}

console.log("Welcome to the dictionary!");
while (dictionaryRunning) {
    var response = ask.question("Press 'd' to use dictionary, press 's' to search for a word, press 'q' to quit.  ").toLowerCase();
    if (response === "d") {
        getWord();
    } else if (response === "s") {
        search(word, definition);
    } else if (response === "q") {
        dictionaryRunning = false;
    }
}