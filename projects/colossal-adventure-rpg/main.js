var input = "";
//var name = "";
//var enter = "";
var attacked = "";
var encounter = "";
var playerHealth = 30;
var escaped = "";
var endGame = "q";
var itemInventory = [];
//
var ask = require("readline-sync");
console.log();

var name = ask.question("Greetings traveler, state your name before you begin your dangerous quest: ");
console.log();

console.log("Ahhhh, good day " + name + " your new path will be a dark one. Be wary of your surroundings and good luck... ");
console.log();

do {
    input = ask.question("Press 'w' to start walking a few steps. \nPress 'q' to quit at any time.\nPress 'i' to see what's in your inventory.\nPress 'h' to display your health:  ");
    console.log();
    // place the function 
    chanceAttack(input);
    if (attacked) {
        enemyEncounter(attacked);
    }

    if (input === "h") {
        console.log("You have " + playerHealth + " HP left.");
        console.log();
        input = "w";
        continue;
    }

    //    if (!escaped) {
    //        enemyAttack(escaped);
    //         
    //    } else if (attacked) {
    //        enemyAttack(attacked);
    //         
    //    }

    if (playerHealth <= 0) {
        console.log("You died.");
        console.log();
        break;
    }

    if (input === "q") {
        break;
    }

} while (input === "w");







function chanceAttack(input) {
    var random = Math.random();
    if (input === "w") {
        if (random < .25 || random < .3) {
            console.log("You're being attacked!");
            console.log();
            attacked = true;
        }
    }
}

function enemyEncounter(attacked) {
    // generate random monster name 
    var monsterArray = ["Undead", "Vampire", "Dragon"];
    var randomVillian = Math.floor(Math.random() * monsterArray.length);
    var randomMonster = monsterArray[randomVillian];
    // console.log(randomMonster); 
    console.log("A dangerous " + randomMonster + " appeared!\n");

    encounter = ask.question("What will you choose? Enter 'f' to fight or 'r' to run:  ");
    console.log();
    if (encounter === "f") {
        var randomAttack = Math.floor(Math.random() * 20);
        console.log("You dealt " + randomAttack + " points of damage and destroyed the attacker. ");
        console.log();
        var itemsArray = ["Bow", "Arrows", "Gold Coins", "Armor", "Helmet", ("Extra Health" + playerHealth + 5), "Steel Longsword"];
        var randomItem = Math.floor(Math.random() * itemsArray.length);
        var randomPrize = itemsArray[randomItem];
        console.log("You received " + randomPrize + " in your inventory."); 
        console.log(); 
        itemInventory = itemInventory + randomPrize; 
    } else if (encounter === "r") {
        var randomEscape = Math.random();
        if (randomEscape < .5) {
            console.log("You got away safely! ");
            console.log();
            escaped = true;
        } else {
            console.log("You didn't escape and took extra damage.");
            console.log();
            escaped = false;
        }
    }

    //    console.log(randomAttack); 
}


function enemyAttack(escaped, attacked) {
    if (!escaped) {
        var randomAttack = Math.floor(Math.random() * 15);
        console.log("The enemy dealt " + randomAttack + " points of damage.");
        console.log();
        playerHealth = playerHealth - randomAttack;
    } else if (attacked) {
        randomAttack2 = Math.floor(Math.random() * 8);
        console.log("The enemy dealt " + randomAttack2 + " points of damage.");
        console.log();
        playerHealth = playerHealth - randomAttack2;
    }
}

function printIventory() {
    
}