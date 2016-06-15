// 22
var count = 0; 
function letterCounter(string, char) {
    for (var i = 0; i < string.length; i++) {
        if (char === string[i]) {
            count++; 
        } 
    }
    return count; 
}

console.log(letterCounter("hello", "l")); 


// 6 
var longString = ""; 
function longestString(string) {
    var newString = string.toLowerCase().split(" "); 
    for (var i = 0; i < newString.length; i++) {
        if (newString[i] < newString[i + 1]) {
            longString = newString[i];
        }
    }
    return longString
}

console.log(longestString("Web Developement Tutorial")); 

// 11 Write a JavaScript function which will take an array of numbers stored 
// and find the second lowest and second greatest numbers, respectively. 
var secondMin; 
var secondMax; 
function lowestGreatest(array) {
    var newAry = array.join(""); 
    newAry = newAry.split(""); 
    
    for (var i = 0; i < newAry.length; i++) {
        secondMin = Math.min(newAry[i]); 
        secondMax = Math.max(newAry[i]); 
    }
    return secondMax; 
}

console.log(lowestGreatest([1, 2, 3, 4, 5])); 