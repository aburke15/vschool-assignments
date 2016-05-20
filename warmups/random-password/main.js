function randomPassword(passLength, characters) {
    var charSet = characters;
    var newPassword = ""; 
    for (var i = 0; i < passLength; i++) {
        newPassword += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }
    return newPassword; 
}

console.log(randomPassword(8, "abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+")); 
console.log(randomPassword(12, "abcdefghijklmnopqrstuvwxyx!@#$%^&*()_+"));
console.log(randomPassword(16, "1234567890!@#$%^&*()-=~<>_+"));