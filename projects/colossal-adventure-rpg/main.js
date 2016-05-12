var ask = require("readline-sync");
var input = "";
var level = 1;
var count = 0;
var action = "";
var playerHealth = 30;
var itemInventory = [];
var monsterArray = ["Undead", "Vampire", "Dragon"];
var itemsArray = ["Bow", "Arrows", "Gold Coins", "Armor", "Helmet", "Steel Longsword", "Buckler", "Ultra Great Sword", "Poition", "Magic Scrolls", ];
console.log();
console.log();

var name = ask.question("Greetings traveler, state your name before you begin your dangerous quest: ");
console.log();

console.log("Ahhhh, good day " + name + " your new path will be a dark one. Be wary of your surroundings and good luck... ");

do {
    console.log();
    console.log("========================================================");
    console.log();
    input = ask.question("Press 'w' to start walking a few steps. \nPress 'q' to quit at any time.\nPress 'i' to see what's in your inventory.\nCurrent HP: " + playerHealth + ":  ").toLowerCase();
    console.log();
    console.log("========================================================");
    console.log();
    health(input);
    quit(input);
    printItems(input);
    enemyEncounter(input)
    hitPoinsZero(playerHealth);
    exceptionsInput(input);
    levelUp();
    //exceptionsAction(action); 
} while (playerHealth > 0);

function enemyEncounter(input) {
    if (input === "w") {
        if (Math.random() < .25 || Math.random() < .3) {
            console.log("You're being attacked!");
            console.log();
            var randomAttack = Math.floor(Math.random() * monsterArray.length);
            var newEncounter = monsterArray[randomAttack];
            console.log("Oh no! " + newEncounter + " has just appeared!");
            console.log();
            action = ask.question("What will you do? Press 'f' to fight or 'r' to run: ").toLowerCase();
            console.log();
            console.log("========================================================");
            console.log();
            if (action === "f") {
                var randomDamage = Math.floor(Math.random() * 20)
                console.log("You dealt " + randomDamage + " points of damage to the enemy.");
                console.log();
                var enemyDamage = Math.floor(Math.random() * 10);
                console.log("The enemy dealt " + enemyDamage + " points of damage to your health.");
                console.log();
                playerHealth = playerHealth - enemyDamage;
                var randomItem = Math.floor(Math.random() * itemsArray.length);
                var newItem = itemsArray[randomItem];
                console.log("You gained " + newItem + " in your inventory.");
                itemInventory.push(newItem);
                count++;
                //                console.log(count); 
            } else if (action === "r") {
                if (Math.random() < .5) {
                    console.log("You didn't escape and took extra damage...");
                    console.log();
                    var enemyDamage2 = Math.floor(Math.random() * 15);
                    console.log("The enemy dealt " + enemyDamage2 + " points of extra damage to your health.");
                    playerHealth = playerHealth - enemyDamage2;
                } else {
                    console.log("You escaped this battle unharmed.");
                }
            }
        } else {
            console.log("You're safe for now... Let's keep walking.");
        }
    }
}

function printItems(input) {
    if (input === "i") {
        for (var i = 0; i < itemInventory.length; i++) {
            items = itemInventory[i] + " ";
        }
        console.log("inventory:");
        console.log(itemInventory);
        console.log();
    }
}

function quit(input) {
    if (input === "q") {
        playerHealth = 0;
    }
}

function health(input) {
    if (input === "h") {
        console.log("You have " + playerHealth + " HP left.");
    }
}

function hitPoinsZero() {
    if (playerHealth <= 0) {
        console.log();
        console.log("End Of Game");
        console.log();
    }
}

function exceptionsInput(input) {
    if (input !== "w" && input !== "i" & input !== "q") {
        console.log("Invalid input, please try again.");
    }
}

function levelUp() {
    if (count === 5) {
        level++;
        console.log();
        console.log("You have gained a level! You are now level " + level + "!");
        console.log(); 
        console.log("You gained 20 points of health."); 
        playerHealth = playerHealth + 20;
        count = 0;
    }
}