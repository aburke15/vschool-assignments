function letterFrequency(phrase) {
    var letterFrequency = {};
    for (var i = 0; i < phrase.length; i++) {
        var letter = phrase[i];

        if (!letterFrequency.hasOwnProperty(letter)) {
            letterFrequency[letter] = 1;
        } else {
            letterFrequency[letter] += 1;
        }
    }
    
    for (var key in letterFrequency) {
        console.log('"' + key + '"' + ": " + letterFrequency[key]);
    }
}

letterFrequency("slimy smelly solution");