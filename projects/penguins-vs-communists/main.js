function Parties(party) {
    this.population = 1000000000;
    this.party = party;
}

var penguins = new Parties("Penguins");

var communists = new Parties("Communists");

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
}

function onHit(party) {
    console.log("The attack was successful, the " + party + " hit them head on!"); 
    var randomDamage = Math.floor(Math.random() * 150000) + 100000; 
    
    if (party === "Penguins") {
        communists.population = communists.population - randomDamage; 
        console.log("The Communists lost " + randomDamage + " of their population."); 
        console.log(communists.population); 
    } else {
        communists.population = communists.population - randomDamage; 
        console.log("The Communists lost " + randomDamage + " of their population.");
    }
}

function onMiss(party) {
    console.log("The attack missed, the " + party + " are proving to be quite distasteful..."); 
}

sendNuke(party, onHit, onMiss); 