function Party(party) {
    this.population = 1000000000;
    this.party = party;
}

var penguins = new Party("Penguins");
console.log(penguins); 

var communists = new Party("Communists");
console.log(communists); 

var attacksFirst = Math.floor(Math.random() * 2) + 1;

console.log(attacksFirst); 


function sendNuke(party, onHit, onMiss) {
    if (attacksFirst === 1) {
        console.log("The " + party + " will be attacked."); 
    } else {
        console.log("The " + party + " will be attacked."); 
    }
    var hitOrMiss = Math.floor(Math.random() * 3) + 1; 
    //console.log(hitOrMiss); 
    var randomDamage = Math.floor(Math.random() * 90000) + 25000; 
    //console.log(randomDamage); 
}

function onHit(party) {
    sendNuke(party); 
}

function onMiss(party) {
    sendNuke(party); 
}

sendNuke(Party(), onHit, onMiss); 