var ask = require("readline-sync");
var Location = require("./location"); 
//var location = require("./location");

function makeGrid() {
    var myGrid = [];
    for (var i = 0; i < 10; i++) {
        var line = [];
        for (var j = 0; j < 10; j++) {
            line.push(new Location()); 
        }
        myGrid.push(line); 
    }
    return myGrid; 
}

function displayGrid(grid) {
    var printGrid = ""; 
    for (var i = 0; i < grid.length; i++) {
         var line = "";
        for(var j = 0; j < grid.length; j++) {
            line += grid[i][j].ship + " ";
        }
        printGrid += line + "\n";
    }
    console.log(printGrid); 
}

var grid = makeGrid(); 
displayGrid(grid); 
//console.log("Welcome to BattleShip!"); 
//var coordinates = ask.question("Please enter the coordinates of which location you would like to attack in this format '1,5'");