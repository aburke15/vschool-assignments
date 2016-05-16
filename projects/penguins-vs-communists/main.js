var attacksFirst = Math.floor(Math.random() * 2) + 1;

function Party() {
    this.population = 1000000000; 
    if (attacksFirst === 1) {
        this.party = "Penguins"; 
    } else {
        this.party = "Communists"; 
    }
    onHit(this.party); 
    onMiss(this.party); 
}

var parties = new Party(); 
console.log(parties); 

//var penguins = new Party("Penguins");
////console.log(penguins); 
//
//var communists = new Party("Communists");
////console.log(communists); 



//console.log(attacksFirst); 

function onHit(party) {
    sendNuke(party);
    console.log("The attack was successful!");
}

function onMiss(party) {
    sendNuke(party);
    console.log("The attack was unsuccessful!");
}

function sendNuke(party, onHit, onMiss) {
    if (attacksFirst === 1) {
        console.log("The " + party + " will be attacked.");
    } else {
        console.log("The " + party + " will be attacked.");
    }
    var hitOrMiss = Math.floor(Math.random() * 3) + 1;
    if (hitOrMiss === 3) {
        onHit();   
    } else {
        onMiss();  
    }
    var randomDamage = Math.floor(Math.random() * 90000) + 25000;
    //console.log(randomDamage); 
}


sendNuke(party, onHit, onMiss); 
