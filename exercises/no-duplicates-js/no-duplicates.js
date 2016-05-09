//input
var input = "bookeeper larry";
var splitInput = input.split(""); 
//console.log(input);
// output
// No duplicates: 'bokepr lay'
// The Extras: 'okeerr'
console.log(splitInput); 

var noDoubles = [];
var extras = [];

for (var i = 0; i < input.length; i++) {
    // if current item already in noDupes
    if (noDoubles.indexOf(input[i]) > -1) {
        // add to extras
        extras.push(input[i]);
    } else {
        // add to noDupes
        noDoubles.push(input[i]);
    }
}
// join noDupes
console.log(noDoubles.join(""));
// join extras
console.log(extras.join(""));