// create function for the problem
function array123(Array) {
    var string = Array.join(""); 
    return string.indexOf("123") !== -1
}

console.log(array123([1, 1, 2, 4, 1])); //true
console.log(array123([1, 1, 1, 2, 3])); //false 
console.log(array123([1, 3, 2, 1])); 