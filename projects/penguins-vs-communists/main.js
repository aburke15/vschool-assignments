function Parties(party, population) {
    this.population = population;
    this.party = party;
}

var penguins = new Parties("Penguins", 1000000000);
var communists = new Parties("Communists", 1000000000);

function game() {
    
}

while (penguins.population >= 0 && communists.population >= 0) {
    sendNuke(party, onHit, onMiss); 
    var party = "";
    var firstAttack = Math.floor(Math.random() * 2) + 1;
    if (firstAttack === 1) {
        party = penguins.party;
    } else {
        party = communists.party;
    }

    function sendNuke(party, onHit, onMiss) {
        console.log("The " + party + " will be the first to attack.");
        console.log(); 
        var randomAttack = Math.floor(Math.random() * 3) + 1;
        if (randomAttack === 3) {
            onHit(party);
        } else {
            onMiss(party);
        }
        var randomDamage = Math.floor(Math.random() * 500000) + 300000;
        if (party === "Penguins") {
            penguins.population = penguins.population - randomDamage;
            console.log("The Communists counter and attack back.");
            console.log(); 
            console.log("The Penguins lose " + randomDamage + " of their population.");
            console.log(); 
        } else {
            communists.population = communists.population - randomDamage;
            console.log("The Penguins counter and attack back");
            console.log(); 
            console.log("The Communists lose " + randomDamage + " of their population.");
            console.log(); 
        }
    }

    function onHit(party) {
        console.log("The attack was successful, the " + party + " hit them head on!");
        console.log(); 
        var randomDamage = Math.floor(Math.random() * 500000) + 300000;

        if (party === "Penguins") {
            communists.population = communists.population - randomDamage;
            console.log("The Communists lost " + randomDamage + " of their population.");
            console.log(); 
        } else {
            penguins.population = penguins.population - randomDamage;
            console.log("The Penguins lost " + randomDamage + " of their population.");
            console.log(); 
        }
    }

    function onMiss(party) {
        console.log("The attack missed, the " + party + " are proving to be quite distasteful...");
        console.log(); 
    }
//    console.log(penguins.population);
//    console.log(communists.population);
    console.log("===============================================================================");
    //    sendNuke(party, onHit, onMiss);

}

if (penguins.population <= 0) {
    console.log("The Penguins have been exterminated.");
    console.log(); 
} else if (communists.population <= 0) {
    console.log("The Communists have been exterminated.");
    console.log(); 
}