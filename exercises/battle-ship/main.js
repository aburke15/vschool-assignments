var myGrid = new Array(10);
var count = 1;
var location = require("./location"); 
 

for (var i = 0; i < 10; i++) {
    myGrid[i] = new Array(10);
}

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        myGrid[i][j] = location;  
    }
}

