function Parties(party, population) {
    this.population = population;
    this.party = party;
}

var penguins = new Parties("Penguins", 1000000000);
var communists = new Parties("Communists", 1000000000);
var firstAttack = Math.floor(Math.random() * 2) + 1;
var party = "";

if (firstAttack === 1) {
    party = penguins.party;
} else {
    party = communists.party;
}

function sendNuke(party, onHit, onMiss) {
    console.log("The " + party + " will be the first to attack.");
    var randomAttack = Math.floor(Math.random() * 3) + 1;
    if (randomAttack === 3) {
        onHit(party);
    } else {
        onMiss(party);
    }
    var randomDamage = Math.floor(Math.random() * 150000) + 100000;
    if (party === "Penguins") {
        penguins.population = penguins.population - randomDamage;
        console.log("The Communists counter and attack back.");
        console.log("The Penguins lose " + randomDamage + " of their population.");
    } else {
        communists.population = communists.population - randomDamage;
        console.log("The Penguins counter and attack back");
        console.log("The Communists lose " + randomDamage + " of their population.");
    }
}

function onHit(party) {
    console.log("The attack was successful, the " + party + " hit them head on!");
    var randomDamage = Math.floor(Math.random() * 150000) + 100000;

    if (party === "Penguins") {
        communists.population = communists.population - randomDamage;
        console.log("The Communists lost " + randomDamage + " of their population.");
        console.log(communists.population);
    } else {
        penguins.population = penguins.population - randomDamage;
        console.log("The Penguins lost " + randomDamage + " of their population.");
    }
}

function onMiss(party) {
    console.log("The attack missed, the " + party + " are proving to be quite distasteful...");
}

sendNuke(party, onHit, onMiss);