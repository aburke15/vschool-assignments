function stringSplosion(string) {
    var str = ""; 
    for (var i = 0; i < string.length; i++) {
        str += string.slice(0, i + 1); 
    }
    console.log(str); 
}
stringSplosion("Jill"); 


//String.prototype.forEach = function(callback) {
//    for (var i = 0; i < this.length; i++) {
//        callback(this[i], i, this);
//    }
//}
//
//function stringSplosion(string) {
//    var str = "";
//    
//    string.forEach(function(letter, index) {
//        str += string.slice(0, index + 1);
//    });
//    
//    return str;
//}
//
//console.log(stringSplosion("Code"));