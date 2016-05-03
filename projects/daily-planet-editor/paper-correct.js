var enemies = ["Lex", "Batman", "Darkseid", "Braniac", "General Zod", "Doomsday"];

function whoWins(isThereKryptonite, enemyName) {
    if (!isThereKryptonite) {
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
}

for (var i = 0; i < enemies.length; i++) {
    isThereKryptonite = (i % 2 === 0);
    console.log(whoWins(isThereKryptonite, enemies[i]));
}

function howAttractedIsLoisLaneToMe() {
    return Math.floor((Math.random() * 10) + 1);
}

var loisLaneLevel = howAttractedIsLoisLaneToMe();

console.log("On a scale of 1 - 10, Lois Lane thinks of me as " + loisLaneLevel + " (Higher is better).");

if (loisLaneLevel > 5) {
    console.log("Lois Lane digs me.");
} else if (loisLaneLevel === 5) {
    console.log("Lois Lane thinks I'm alright.");
} else {
    console.log("Lois is missing out.");
}

var clarkKent = true;
var superman = false;

while (clarkKent === true) {
    console.log("I'm just a nerdy colmnist");
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent = false;
        superman = true;
        console.log("Now I'm Superman!");
    }
}