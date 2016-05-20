function newPassword(length, characters) {
    var char = characters; 
    var password = ""; 
    for (var i = 0; i < length; i++) {
        password += char.charAt(Math.floor(Math.random() * char.length)); 
    }
    return password; 
}

console.log(newPassword(10, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+")); 