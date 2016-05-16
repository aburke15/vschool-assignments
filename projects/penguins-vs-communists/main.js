function Parties(party, population) {
    this.population = population;
    this.party = party;
}

var penguins = new Parties("Penguins", 1000000);
var communists = new Parties("Communists", 1000000);
var communistHealth = communists.population;
var penguinsHealth = penguins.population;

function game() {
    setTimeout(function () {

        var party;
        var firstAttack = Math.floor(Math.random() * 2) + 1;
        if (firstAttack === 1) {
            party = penguins.party;
        } else {
            party = communists.party;
        }
        
        sendNuke(party, onHit, onMiss); 

        function sendNuke(party, onHit, onMiss) {
            console.log("The " + party + " will be the first to attack.");
            console.log();
            var randomAttack = Math.floor(Math.random() * 3) + 1;
            if (randomAttack === 3) {
                onHit(party);
            } else {
                onMiss(party);
            }
            var randomDamage = Math.floor(Math.random() * 200000) + 100000;
            if (party === "Penguins") {
                penguinsHealth = penguinsHealth - randomDamage;
                console.log("The Communists counter and attack back.");
                console.log();
                console.log("The Penguins lose " + randomDamage + " of their population.");
                console.log();
            } else {
                communistHealth = communistHealth - randomDamage;
                console.log("The Penguins counter and attack back");
                console.log();
                console.log("The Communists lose " + randomDamage + " of their population.");
                console.log();
            }
        }

        function onHit(party) {
            console.log("The attack was successful, the " + party + " hit them head on!");
            console.log();
            var randomDamage = Math.floor(Math.random() * 125000) + 75000;
            if (party === "Penguins") {
                communistHealth = communistHealth - randomDamage;
                console.log("The Communists lost " + randomDamage + " of their population.");
                console.log();
            } else {
                penguinsHealth = penguinsHealth - randomDamage;
                console.log("The Penguins lost " + randomDamage + " of their population.");
                console.log();
            }
        }

        function onMiss(party) {
            console.log("The attack missed, the " + party + " are proving to be quite distasteful...");
            console.log();
        }

        console.log("===============================================================================");

        if (penguinsHealth > 0 && communistHealth > 0) {
            game();
        } else if (penguinsHealth <= 0) {
            console.log("The Penguins have been exterminated.");
            console.log();
        } else if (communistHealth <= 0) {
            console.log("The Communists have been exterminated.");
            console.log();
        }
    }, 500);
}

game();