function antiCaps(phrase) {
    var str = ""; 
    for (var i = 0; i < phrase.length; i++) {
        if (isCaps(phrase[i]) === true) {
            str += phrase[i].toLowerCase(); 
        } else {
            str += phrase[i].toUpperCase(); 
        }
    }
    console.log(str);
}

function isCaps(letter) {
    return letter === letter.toUpperCase();
}

antiCaps("aPPLE"); 
console.log(isCaps("APPLE")); 