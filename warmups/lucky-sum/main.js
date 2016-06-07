function lukcySum(a, b, c) {
    if (a === 13) {
        return b + c; 
    } else if (b === 13) {
        return a + c; 
    } else if (c === 13) {
        return a + b; 
    } else {
        return a + b + c; 
    }
}

console.log(lukcySum(1, 2, 13));
console.log(lukcySum(4, 2, 1));
console.log(lukcySum(1, 13, 4));
console.log(lukcySum(13, 2, 1)); 

function luckySum(a, b, c) {
    
}