function nonRepeat(string) {
    string = string.toLowerCase();
    var str = ""; 
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) !== string.charAt(i + 1)) {
            return string.charAt(i + 1); 
        } 
    } 
}


console.log(nonRepeat("ggggggggx"));
console.log();
console.log(nonRepeat("ggggggggxkljfvlsjkfg"));
console.log();
console.log(nonRepeat("gxkljfvlsjkfg"));
console.log();
console.log(nonRepeat("ggggggggggggg"));