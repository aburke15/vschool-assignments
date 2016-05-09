
function createEvenArray(highestNum) {
    var evensOnlyArray = [];
    for (var i = 0; i < highestNum; i++) { 
        if (i % 2 === 0) {
            evensOnlyArray.push(i + 2);
        } 
    }
    return evensOnlyArray; 
}

function addOdds (evensArray) {
    var odds = []; 
    var final = []; 
    for (var i = 0; i < evensArray.length; i++) {
        odds.push(evensArray[i] - 1)
    }
    final = evensArray.concat(odds); 
    return final; 
}

function sortNums (addOdds) {
    return addOdds.sort(function(a, b){return a - b});
}

var evensArray = createEvenArray(10);
console.log(sortNums(addOdds(createEvenArray(10)))); 