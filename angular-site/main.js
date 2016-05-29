function longestWord(string) {
    // separate the string on the spaces
    // set a count to hold the value of the longest word
    // loop through the string 
    // if the length of the string is greater than the longest word
        // set the value of the longest word equal to that string iteration 
        // return the longest value 
    var stringArray = string.split(" "); 
    var longerWord = 0;
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > longerWord) {
            longerWord = stringArray[i].length; 
        } 
    }
    return longerWord; 
}

console.log(longestWord("how are you doing?"));