function randomPassword(length, characters) {
    var char = characters; 
    var password = ""; 
    for (var i = 0; i < length; i++) {
        password += char.charAt(Math.floor(Math.random() * char.length)); 
    }
    return password; 
}

console.log(randomPassword(8, ";alskdjfz,xmcnvqpoweiur109283746565!@#$%^&*()_+")); 