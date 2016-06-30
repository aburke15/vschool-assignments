function teleString(number) {
    var newNum = number.replace(/[^\w\s]/gi, "");
    letterReplace(newNum); 
}

function letterReplace(number) {
    number = number.replace(/[abc]/ig, "2");
    number = number.replace(/[def]/ig, "3");
    number = number.replace(/[ghi]/ig, "4");
    number = number.replace(/[jkl]/ig, "5");
    number = number.replace(/[mno]/ig, "6");
    number = number.replace(/[pqrs]/ig, "7");
    number = number.replace(/[tuv]/ig, "8");
    number = number.replace(/[wxyz]/ig, "9");
    number = number.replace(/0/ig, "0");
    number = number.replace(/1/ig, "1");
    
    console.log(number); 
}

function formatNumber(number) {
    
}

teleString("1-800-contact");