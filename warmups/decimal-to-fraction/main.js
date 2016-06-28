function decimalToFraction(dec) {
    var whole = dec.toString();
    var half = whole.split(".");
    var left = parseInt(half[0]);
    var right = parseInt(half[1]);
    var num = left + right;
    var den = right 
    return num + "/" + den;  
}


console.log(decimalToFraction(0.5));
console.log(decimalToFraction(1.5));
console.log(decimalToFraction(1.75));