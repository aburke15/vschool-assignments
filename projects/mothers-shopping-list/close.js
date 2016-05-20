// if a is one away from b and c is more than one away from a and b return true

// else return fasle 

function closeFar(a, b, c) {
    var aIsCloseToB = Math.abs(a - b) < 2; // 1
    var aIsCloseToC = Math.abs(a - c) < 2; // 2
    var bIsCloseToC = Math.abs(b - c) < 2; // 1
    if(aIsCloseToB) {
        return !aIsCloseToC && !bIsCloseToC; 
    } else if (aIsCloseToC) {
        return !aIsCloseToB && !bIsCloseToC; 
    } else {
        return false; 
    }
}

console.log(closeFar(1, 2, 3)); //false
console.log(closeFar(1, 2, 10)); // true
console.log(closeFar(4, 1, 3)); // true