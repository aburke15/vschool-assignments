function isPalindrome(string) {
    var plainString = string.toLowerCase().replace(/[^\w]/g, ""); 
    if (reverser(plainString) === plainString) {
        return string + ": is a palindrome.";
    } else {
        return string + ": is not a palindrome."; 
    }
}

function reverser(word) {
    return word.split("").reverse().join("");
}

console.log(isPalindrome("Taco cat"));
console.log();
console.log(isPalindrome("I madam, I made radio, so I dared! Am I mad? Am I!?"));
console.log();
console.log(isPalindrome("bob"));
console.log();
console.log(isPalindrome("Apple"));
console.log(); 
console.log(isPalindrome("Hannnnnnnnah")); 