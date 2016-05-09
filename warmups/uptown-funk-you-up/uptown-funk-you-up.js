var lyrics = ["This","hit","that","ice","cold","Michelle","Pfeiffer","that","white","gold","This","one","for","them","hood","girls","Them","good","girls","straight","masterpieces","Stylin","whilen","livin","it","up","in","the","city","Got","Chucks","on","with","Saint","Laurent","Got","kiss","myself","Im","so","pretty"];  

function printLyrics() {
    return console.log(lyrics.join(" ")); 
}

function printLyricsReverse() {
    return console.log(lyrics.reverse().join(" ")); 
}

function printEveryOther() {
    var everyOtherLyric = ""; 
    for (var i = 0; i < lyrics.length; i += 2) {
        everyOtherLyric += lyrics[i] + " "; 
    }
    return console.log(everyOtherLyric); 
}

console.log(); 
printLyrics();
console.log();
printLyricsReverse();
console.log(); 
printEveryOther(); 