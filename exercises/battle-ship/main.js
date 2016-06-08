var newShip = new Location();
var ask = require("readline-sync");

var myGrid = new Array(10);
var count = 1;
//var location = require("./location");

for (var i = 0; i < 10; i++) {
    myGrid[i] = new Array(10);
}

var displayGrid = "";
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        myGrid[i][j] = newShip.hit;
        displayGrid += myGrid[i][j];
    }
}

//console.log("Welcome to BattleShip!"); 
//var coordinates = ask.question("Please enter the coordinates of which location you would like to attack in this format '1,5'");