function stringSplosion(string) {
    var str = ""; 
    for (var i = 0; i < string.length; i++) {
        str += string.slice(0, i + 1); 
    }
    console.log(str); 
}

stringSplosion("Ayo"); 