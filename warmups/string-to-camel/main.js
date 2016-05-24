function camelCase(string) {
    string = string.toLowerCase();
    var newStr = string.replace(/-|_| /g, " ");
    var theString = newStr.split(" "); 
    console.log(firstLetter(theString)); 
}

function firstLetter(array) {
    var newString = array[0]; 
    for (var i = 1; i < array.length; i++) {
        newString += array[i].charAt(0).toUpperCase().concat(array[i].slice(1)); 
    }
    return newString; 
}

camelCase("Hello world");
camelCase("hi how aRe-you-tOday"); 